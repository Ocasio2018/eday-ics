const fs = require("fs");

module.exports = ({
  first,
  last,
  email,
  polling_venue,
  polling_address,
  attachment
}) => ({
  from: "Team Ocasio <us@ocasio2018.com>",
  to: email,
  subject: `CORRECTION: Polls are open from 6AM - 9PM tomorrow`,
  // subject: `Make a plan for the primary TOMORROW!`,
  attachment: [attachment],
  text: `Our last email contained poll open times that were slightly off - in fact, you have MORE time to vote than we previously stated. Polls actually open at 6AM tomorrow and close at 9PM. We're sorry about the confusion. 
  
  We have attached an updated calendar event and voting reminder to  this email as well.
  
  Once again, if you need to look up your polling location, you can do so here: https://ocasio2018.com/polling-place.

  Plan a time to spend 30 minutes to vote -- Bring your family, friends and neighbors too!

  Thanks for your support,
  Team Ocasio
  `,
  html: `
    
  <center>
  <table style="margin: 0;padding: 0;background-color: #FFFFFF;height: 100% !important;width: 100% !important; line-height: 100% !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" id="backgroundTable" cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody><tr>
      <td style="border-collapse: collapse;" valign="top" align="center">
        <table style="border: 0;background-color: #FFFFFF; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" cellspacing="0" cellpadding="0" border="0" align="center">
          <tbody><tr>
            <td style="border-collapse: collapse;" valign="top" align="center">

<h1 style="letter-spacing:3px;line-height:1em;text-align: center; padding: 25px 0 12px 0; border: 0; margin: 0;">

<a style="color:#0062ac" href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h0/HosEvR66t0xMN-2BhlENXHxTEEKQFAPSFopAXLr-2BBA5CYxuuTstSj6bcfUTkkUAcHjcpOIFPz35O7mN645MJku-2BzrwJRf2YW4CBPhOA0Ncf0n16SnPAaKgD-2BB1PN4y5eL6tkv-2Bo3cpjaEXAVGBI87EkWCVefnOl-2FuU1LVmykp6-2B5ORufWTLegYgfUbBOSibTMkx2KfJQYMC4dvBVs6aDHMAcjgPVBPPB4AcbVBzTNeOR0-3D">
<img style="height: 125px; max-width: 90%;" alt="Ocasio 2018" src="https://actionnetwork.org/user_files/user_files/000/022/672/original/Ocasio2018_Logo_BLACK_150.png">
</a>	
</h1>


<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;max-width: 600px; margin: 0 auto;font-weight: 400; font-size: 17px; line-height: 140%;">&nbsp;</div>

<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;margin: 5px;">
<p style="margin-bottom:16px;padding:0px">${first} – <br>
</p>

<p style="margin-bottom:16px;padding:0px">Our last email contained poll open times that were slightly off - in fact, you have MORE time to vote than we previously stated. Polls actually open at 6AM tomorrow and close at 9PM. We're sorry about the confusion.</p>

<p style="margin-bottom:16px;padding:0px">We have attached an updated calendar event and voting reminder to  this email as well.</p>

<p style="margin-bottom:16px;padding:0px">Once again, if you need to look up your polling location, you can do so here: https://ocasio2018.com/polling-place.</p>

<p style="margin-bottom:16px;padding:0px">
Plan a time to spend 30 minutes to vote -- Bring your family, friends and neighbors too!
</p>

<p style="margin-bottom:16px;padding:0px"> Thanks for your support, </p>

<p style="margin-bottom:16px;padding:0px"> Team Ocasio </p>


<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;text-align: left; margin-top: 40px; padding-top: 10px; border-top: 2px solid #ececec; max-width: 600px; margin-left: auto; margin-right: auto; font-weight: 400; font-size: 13px; line-height: 120%;" class="footer">
<table style="width: 200px; max-width: 325px; height: 25px; margin: 0 auto; padding-bottom: 10px; font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;" cellspacing="0" cellpadding="0&quot;">
<tbody>
<tr>
<td colspan="3" style="width: 100%; text-align: center;"><strong><a href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h2/aHO21LnX1DH2iKGsTPn3bYhi39zkK-2F5KLSrcx61KPVGBGE5uhyyJH1pAOZZoAT0Gr7gnRAdc-2FN-2Ffi-2BxXvNfGep41awHi-2FDB7EIOVO2v48FReId238TEaTubce39uB7lXA7QIgQvsXlqPhr-2B7uC-2BROK5-2FDAsVMCKUxvNxxa8UUoAjj4kFZOXMG-2FBNb9fgW5sarGXrxqaQ5EkgZ1LaA5A2g5yIcShORDW71yZxxN-2BEtu4vhai3-2BVo45H-2B63L-2BdOv6iQeRCxT-2Fi8E7PJQAHFPJBCpuwbbJLKoONxVAvT-2FBXN0M-3D" style="color:#0062ac;font-family: sans-serif; font-size: 20px; background-color: #3c2d82; border-top: 1px solid #141042; border-bottom: 2px solid #2c2766; width: 100%; max-width: 300px; margin: 12px auto; border-radius: 5px; text-align: center; color: white; text-decoration: none; padding: 12px 5px 11px; font-weight: bold; display: block; letter-spacing: 0em;">Donate</a></strong></td>

</tr>
<tr>
<td style="text-align: right; padding-right: 10px;"><a style="color:#0062ac" href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h3/HE2UYZIDTZxfLuJ8qHDFiLSbic5v7WJXgAhYl6wA4NBLu-2B-2BbYKqJMWeDH5-2BLg9-2BVaF6KiH3yXDjrngl3JXwzCe17q0z12D2ww-2BbNCAqQzIUr95P1JGqkZRVrgSws23kSoPGH4xWklKYn8uVp0oiKiiKh5MjPv8EhKo-2FvOgf1uW3oi5nn8mCkQ-2FrZs-2F8lNcQXVD2ghGVUG5e2g3nfHE5Fl-2BXgu4cu7SCkbwXHoTzuQaMgHQeCOHTG0kSCgmN-2F4JDg"><img alt="Like on Facebook" src="https://s3.amazonaws.com/ak-jd/images/fb-jd.png" style="height: 75%; width: auto;"></a></td>

<td style="text-align: center;"><a style="color:#0062ac" href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h4/VE2atosPJwyp5yA4oN-2FSaijwGVSNqLdqohWrd0oGse32G-2BwmRGsTmz8QLABHKR5cYwciJemw3jN1J7PpNWD8VRjS3Gt9k1mTrMR3-2FhHiWtGCXvIz-2BJVBqdfb8WFvXBnJQcnH6kr-2Fi3U9VDs-2BAtgJtIPDA4jm88lHtvPNAGgRSteIbrx29MfWNZ20ZTb6QHvuHr85H2nv1OnHAX9HsX5RjtD-2Flj2lfbfSJRu4wAr3-2BhJLXlrY1cYjMLtK9QIhYRqP"><img alt="Follow on Twitter" src="https://s3.amazonaws.com/ak-jd/images/tw-jd.png" style="height: 75%; width: auto;"></a></td>

<td style="padding-left: 10px; text-align: left;"><a style="color:#0062ac" href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h5/XScFdUygk9lHI7pfxHKkZL89yDFet-2B6U69i0gcWODNAmWzywv83V2-2FIxUMJWl7BRRA2eAbYYn-2BQ968WqfeTqAFYGVShXjYNyvFbvi-2BOFCsJIebP1i0Z13g4A-2B21rHo9zZ-2FdgJ5O-2BJq3y3482ew3QuEUoUWMnQlNWQfND33WJ5zSsyzpikamg7EFzGOmKHmGoDr3jDX6PYiMHCTorKZ3iUYQUsYtRZmdW9JZVZSKQmVmV1QURdZimXj8xDuBfrmpS"><img alt="Follow on Instagram" src="https://actionnetwork.org/user_files/user_files/000/023/321/original/ig-ocasio.png" style="height: 75%; width: auto;"></a></td>

</tr>
</tbody>
</table>
<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;border:1px solid #9b9b9b;padding:5px;max-width:250px;margin:auto;text-align:center" id="paid-for-container">
<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;color:#9b9b9b;font-family:&quot;Montserrat&quot;, sans-serif;font-size:12px;text-align:center" id="paid-for">Paid for by Alexandria Ocasio-Cortez 2018</div>

</div>

<div style="font-family:&quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-weight:400;font-size:17px;line-height:140%;text-align:left;color:#3A3A3C;margin:5px;font-size:12px;text-align:center" id="footer">1510 Castle Hill Ave, #311, Bronx, NY 10462 <br>
Email us: <a style="color:#0062ac" href="mailto:us@ocasio2018.com?link_id=6&amp;can_id=&amp;source=email-make-a-plan-for-the-primary-tomorrow-2&amp;email_referrer=email_375416&amp;email_subject=make-a-plan-for-the-primary-tomorrow">us@ocasio2018.com</a>
</div>


</div>

</div>



</td>
          </tr>
          <tr>
            <td style="border-collapse: collapse;" valign="top" align="center">
              <table style="background-color: #FFFFFF;border-top: 2px solid #909090; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" cellspacing="0" cellpadding="0" border="0">
                <tbody><tr>
                  <td style="border-collapse: collapse;" valign="top">
                    <table style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" cellspacing="0" cellpadding="10" border="0">
                      <tbody><tr>
                        <td style="border-collapse: collapse;background-color: #FFFFFF;border-top: 0;" colspan="2" valign="middle">

                          <div style="color: #707070;font-family: Arial;font-size: 11px;line-height: 125%;text-align: left;">
                            Sent via <a style="color: #0096DB;" href="http://click.actionnetwork.org/mpss/c/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/h6/55uI0ZjpoLA9-2FYhqE-2F4Eitwb7nFGaBM-2BttuyqSTdMS4-3D">ActionNetwork.org</a>.
                              To update your email address, change your name or address, or to stop receiving emails from Ocasio2018, please <a style="color: #0096DB;font-weight: normal;text-decoration: underline;" href="https://actionnetwork.org/email_unsubscribe/ocasio2018?email=${email}&can_id=&list_type=group">click here</a>.
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
  </tbody></table>
  <br>
</center>

<img style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;" alt="" src="http://click.actionnetwork.org/mpss/o/IwE/kLwXAA/t.2im/mhHQFypxS-m21sMANOwjsA/o.gif" width="1" height="1" border="0">

  `
});
