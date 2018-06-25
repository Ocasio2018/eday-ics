const fs = require("fs");
const papaparse = require("papaparse");
const _ = require("lodash");

const voters = fs.readFileSync("./data/voters.csv").toString();
const email_targets = fs.readFileSync("./data/email-list.csv").toString();
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

const my_campaign_targets = papaparse
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

const email_list_targets = papaparse
  .parse(email_targets)
  .data.reduce((acc, [first, last, email, _zip, van_id, _my_c_id]) => {
    if (!van_id) return acc;

    if (location_map[van_id]) console.log("h");

    const venue = getOrDefault(location_map, van_id, "polling_location", "");
    const address = getOrDefault(location_map, van_id, "polling_address", "");
    const city = getOrDefault(location_map, van_id, "polling_city", "");

    if (email == "") {
      // console.log(`Could not find email for ${van_id}`);
      return acc;
    }

    return acc.concat([[van_id, first, last, email, venue, address, city]]);
  }, []);

const all_targets = Object.values(
  _.groupBy(my_campaign_targets.concat(email_list_targets), row => row[3])
).map(l => l[0]);

const target_string = papaparse.unparse(all_targets);
// console.log(target_string);

function getOrDefault(map, key1, key2, backup) {
  return map[key1] ? map[key1][key2] : backup;
}
