module.exports = ({
  first,
  last,
  email,
  polling_venue,
  polling_address,
  attachment
}) => ({
  from: "Alexandria Ocasio-Cortez <us@ocasio2018.com>",
  to: email,
  subject: `Someone write a subject!`,
  text: `Text body`,
  html: `Html body`,
  attachment: [attachment]
});
