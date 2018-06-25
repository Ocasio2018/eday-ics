const ics = require("ics");

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

module.exports = ({
  first,
  last,
  email,
  polling_venue,
  polling_address,
  polling_city
}) =>
  new Promise((resolve, reject) => {
    const event = {
      start: [2018, 6, 26, 6, 30],
      duration: { hours: 13, minutes: 30 },
      title: "Voting for Alexandria Ocasio-Cortez",
      description: polling_venue
        ? `Bring at at least three neighbors, friends, or family members that you can take to the polls to vote for Alexandria Ocasio-Cortez. Our records say that your polling place is ${polling_venue}, ${polling_address}, ${polling_city}, and you can double-check here: https://nyc.pollsitelocator.com/search.`
        : `Bring at at least three neighbors, friends, or family members that you can take to the polls to vote for Alexandria Ocasio-Cortez. Find your polling place here: https://nyc.pollsitelocator.com/search.`,
      location: polling_venue
        ? `${polling_venue}, ${polling_address}, ${polling_city}`
        : "https://nyc.pollsitelocator.com/search",
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
