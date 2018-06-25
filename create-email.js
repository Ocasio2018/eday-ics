const fs = require("fs");

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
  html: `Html body
  <script type="application/ld+json">
    [{
      "@context": "http://schema.org",
      "@type": "EventReservation",
      "reservationNumber": "Y9087988",
      "reservationStatus": "http://schema.org/Confirmed",
      "modifiedTime": "2018-06-07T01:30:16-05:00",
      "underName": {
        "@type": "Person",
        "name": "${first} ${last}",
        "email": ${email}
      },
      "reservationFor": {
        "@type": "Event",
        "name": "Vote for Alexandria Ocasio-Cortez",
        "description": "It's time to change Congress",
        "startDate": "2018-06-26T06:30:00-05:00",
        "endDate": "2018-06-26T20:30:00-05:00",
        "url": "https://ocasio2018.com",
        "location": {
          "@type": "Place",
          "name": "Public School 222",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "86-15 37 Avenue",
            "addressLocality": "Jackson Heights",
            "addressRegion": "addressRegion",
            "postalCode": "11372",
            "addressCountry": "US"
          }
        }
      }
    }]
  </script>`,
  attachment: [attachment]
});
