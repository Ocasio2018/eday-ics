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
  first,
  last,
  email,
  polling_venue,
  polling_address
]) => {
  console.log(first);

  const attachment = await createIcs({
    first,
    last,
    email,
    polling_venue,
    polling_address
  });

  const data = createEmail({
    first,
    last,
    email,
    polling_venue,
    polling_address,
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

  const chunks = _.chunk(data.filter(line => line.length == 5), CONCURRENCY);
  console.log(chunks);
  for (let chunk of chunks) {
    await Promise.all(chunk.map(line => process_line(line)));
  }
};

go();
