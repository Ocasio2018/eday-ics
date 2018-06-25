const CONCURRENCY = 5;

const fs = require("fs");
const papaparse = require("papaparse");
const _ = require("lodash");

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const createIcs = require("./create-ics");
const createEmail = require("./create-email");

const process_line = async ([
  _,
  first,
  last,
  email,
  polling_venue,
  polling_address,
  polling_city
]) => {
  console.log(email);

  const attachment = await createIcs({
    first,
    last,
    email,
    polling_venue,
    polling_address,
    polling_city
  });

  const data = createEmail({
    first,
    last,
    email,
    polling_venue,
    polling_address,
    polling_city,
    attachment
  });

  const result = await send(data);
  return result;
};

const send = email =>
  new Promise((resolve, reject) => {
    mailgun
      .messages()
      .send(email, (err, body) => (err ? reject(err) : resolve(body)));
  });

const go = async () => {
  const file_path = process.argv[2];
  const file_contents = fs.readFileSync(file_path).toString();
  const { data } = papaparse.parse(file_contents, { header: false });

  const chunks = _.chunk(data.filter(line => line.length == 7), CONCURRENCY);
  for (let chunk of chunks) {
    await Promise.all(chunk.map(line => process_line(line)));
  }
};

go();
