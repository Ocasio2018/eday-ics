const fs = require("fs");
const papaparse = require("papaparse");

const voters = fs.readFileSync("./data/voters.csv").toString();
const locations = fs.readFileSync("./data/polling-locations.tsv").toString();

const location_map = papaparse
  .parse(locations, { delimiter: "\t" })
  .data.reduce(
    (
      acc,
      [
        van_id,
        _last_name,
        _first_name,
        _middle_name,
        _suffix,
        polling_address,
        polling_city,
        polling_location
      ]
    ) =>
      Object.assign(acc, {
        [van_id]: { polling_address, polling_city, polling_location }
      }),
    {}
  );

const targets = papaparse
  .parse(voters)
  .data.reduce(
    (
      acc,
      [
        van_id,
        last,
        first,
        _middle,
        _suffic,
        _phone,
        email,
        envelope_name,
        _my_campaign_id
      ]
    ) => {
      if (!van_id) return acc;

      const venue = getOrDefault(location_map, van_id, "polling_location", "");
      const address = getOrDefault(location_map, van_id, "polling_address", "");
      const city = getOrDefault(location_map, van_id, "polling_city", "");

      if (email == "") {
        // console.log(`Could not find email for ${van_id}`);
        return acc;
      }

      return acc.concat([[van_id, first, last, email, venue, address, city]]);
    },
    []
  );

const target_string = papaparse.unparse(targets);
console.log(target_string);

function getOrDefault(map, key1, key2, backup) {
  return map[key1] ? map[key1][key2] : backup;
}
