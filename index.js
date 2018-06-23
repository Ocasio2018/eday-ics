const ics = require("ics");
const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

const EMAIL = "ben.paul.ryan.packer@gmail.com";

const create = () =>
  new Promise((resolve, reject) => {
    const event = {
      start: [2018, 6, 26, 9, 00],
      duration: { hours: 11, minutes: 0 },
      title: "Vote Vote",
      description: "vote vote vote",
      location: "Folsom Field, University of Colorado (finish line)",
      url: "http://www.bolderboulder.com/",
      geo: { lat: 40.0095, lon: 105.2669 },
      categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
      status: "CONFIRMED",
      organizer: { name: "Admin", email: EMAIL },
      attendees: [{ name: "Adam Gibbons", email: EMAIL, rsvp: true }]
    };

    ics.createEvent(event, (err, val) => {
      return resolve(
        new mailgun.Attachment({
          data: new Buffer(val),
          filename: "Voting.ics",
          contentType: "text/calendar"
        })
      );
    });
  });

const go = async () => {
  const attachment = await create();
  console.log(attachment);

  const data = {
    from: "us@ocasio2018.com",
    to: EMAIL,
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    attachment: [attachment]
  };

  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.log(err);
    }
    console.log(body);
  });
};

go();
