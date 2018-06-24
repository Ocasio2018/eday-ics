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
      // geo: { }, TODO – lat lng for polling places
      // categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
      status: "CONFIRMED",
      organizer: { name: `${first} ${last}`, email },
      attendees: [{ name: `${first} ${last}`, email, rsvp: true }]
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
