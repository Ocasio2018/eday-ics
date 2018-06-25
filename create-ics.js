const ics = require("ics");

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

module.exports = ({ first, last, email, polling_venue, polling_address }) =>
  new Promise((resolve, reject) => {
    const event = {
      start: [2018, 6, 26, 9, 00],
      duration: { hours: 11, minutes: 0 },
      title: "Voting for Alexandria Ocasio-Cortez",
      description: `Voting for Alexandria Ocasio-Cortez at ${polling_venue}, ${polling_address}`,
      location: polling_venue,
      url: "https://nyc.pollsitelocator.com/search",
      status: "CONFIRMED",
      organizer: { name: `${first} ${last}`, email },
      attendees: [
        { name: `${first} ${last}`, email, rsvp: true },
        { name: "Alexandria Ocasio-Cortez", email: "us@ocasio2018.com" }
      ],
      alarms: [
        {
          action: "audio",
          trigger: [2018, 6, 26, 9, 00]
        },
        {
          action: "audio",
          trigger: [2018, 6, 26, 12, 00]
        },
        {
          action: "audio",
          trigger: [2018, 6, 26, 3, 00]
        },
        {
          action: "audio",
          trigger: [2018, 6, 26, 6, 00]
        }
      ]
    };

    ics.createEvent(event, (err, val) => {
      return resolve(
        new mailgun.Attachment({
          data: new Buffer(val),
          filename: "Voting for Ocasio-Cortez.ics",
          contentType: "text/calendar"
        })
      );
    });
  });
