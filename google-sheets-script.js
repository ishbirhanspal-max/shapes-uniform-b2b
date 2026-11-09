/**
 * =========================================================================
 * SHAPES UNIFORM - GOOGLE SHEETS & EMAIL AUTOMATION SCRIPT
 * =========================================================================
 * 
 * This Google Apps Script automatically:
 * 1. Logs every website quote request directly into your Google Sheet.
 * 2. Formats and organizes client details (Date, Name, Company, Phone, Email, Uniform Type, Qty, Specs).
 * 3. Sends an instant branded email notification to shapesuniform@gmail.com with 1-click WhatsApp and Call actions.
 * 
 * -------------------------------------------------------------------------
 * QUICK 2-MINUTE SETUP INSTRUCTIONS:
 * -------------------------------------------------------------------------
 * 1. Open Google Sheets (go to https://sheets.new).
 * 2. Name your sheet "Shapes Uniform - Quote Inquiries".
 * 3. In the top menu, click: Extensions > Apps Script.
 * 4. Delete any existing code in the editor and PASTE this entire script.
 * 5. Click "Deploy" (blue button at top right) > "New deployment".
 * 6. Click the Gear icon next to "Select type" and choose "Web app".
 * 7. In the configuration settings:
 *      - Description: Shapes Uniform Inquiries Webhook
 *      - Execute as: Me (shapesuniform@gmail.com)
 *      - Who has access: Anyone (REQUIRED for receiving website form posts)
 * 8. Click "Deploy".
 * 9. Review and Authorize permissions for your Google Account.
 * 10. Copy the generated "Web App URL" (e.g., https://script.google.com/macros/s/.../exec).
 * 11. Paste that URL into:
 *      - Your Admin Panel (admin.html under Settings > Google Sheets Webhook URL)
 *      - Or save it into index.js (defaultSiteData.settings.webhookUrl)
 * =========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // 1. Initialize Sheet Headers if empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Date & Time",
        "Client Name",
        "Company / Organization",
        "Phone Number",
        "Email Address",
        "Uniform Category",
        "Estimated Volume",
        "Custom Specifications",
        "Status"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#C0392B"); // Shapes Uniform Deep Red
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Extract fields
    var now = new Date();
    var formattedDate = Utilities.formatDate(now, "Asia/Kolkata", "dd MMM yyyy, hh:mm a");
    var clientName = data.name || data["Client Name"] || "N/A";
    var company = data.company || data["Company / Organization"] || "Individual / Direct";
    var phone = data.phone || data["Phone Number"] || "N/A";
    var email = data.email || data["Email Address"] || "N/A";
    var category = data.category || data["Uniform Category"] || "Standard Uniforms";
    var quantity = data.quantity || data["Estimated Order Quantity"] || "50-100 Pieces";
    var message = data.message || data["Custom Specifications"] || "Standard requirements";

    // 2. Append new row to Google Sheet
    sheet.appendRow([
      formattedDate,
      clientName,
      company,
      phone,
      email,
      category,
      quantity,
      message,
      "New Lead"
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 9).setVerticalAlignment("middle");
    sheet.getRange(lastRow, 9).setFontWeight("bold").setFontColor("#C0392B");

    // 3. Send Branded Email Alert to shapesuniform@gmail.com
    var cleanPhone = phone.toString().replace(/[^0-9]/g, "");
    var waUrl = "https://wa.me/91" + cleanPhone;

    var emailSubject = "🚨 New Uniform Inquiry: " + company + " (" + clientName + ")";
    var htmlTemplate = 
      '<div style="font-family: Arial, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #E0E0E0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">' +
        '<div style="background-color: #C0392B; padding: 22px 24px; text-align: center; color: #FFFFFF;">' +
          '<h2 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">SHAPES UNIFORM</h2>' +
          '<p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.95;">New Website Quote Request Received</p>' +
        '</div>' +
        '<div style="padding: 24px; background-color: #FFFFFF; color: #1A1A1A;">' +
          '<p style="margin-top: 0; font-size: 15px; color: #555555;">A new bulk uniform inquiry was submitted through <strong>shapesuniform.in</strong>. Details below:</p>' +
          '<table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555; width: 140px;">Client Name:</td><td style="padding: 10px 0; font-weight: 600; color: #1A1A1A;">' + clientName + '</td></tr>' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555;">Company / Org:</td><td style="padding: 10px 0; font-weight: 600; color: #1A1A1A;">' + company + '</td></tr>' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555;">Phone Number:</td><td style="padding: 10px 0;"><a href="tel:' + phone + '" style="color: #C0392B; font-weight: bold; text-decoration: none;">' + phone + '</a></td></tr>' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555;">Work Email:</td><td style="padding: 10px 0;"><a href="mailto:' + email + '" style="color: #C0392B; text-decoration: none;">' + email + '</a></td></tr>' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555;">Uniform Type:</td><td style="padding: 10px 0; font-weight: bold; color: #C0392B;">' + category + '</td></tr>' +
            '<tr style="border-bottom: 1px solid #F0F0F0;"><td style="padding: 10px 0; font-weight: bold; color: #555555;">Order Quantity:</td><td style="padding: 10px 0; font-weight: 600;">' + quantity + '</td></tr>' +
            '<tr><td style="padding: 10px 0; font-weight: bold; color: #555555; vertical-align: top;">Specifications:</td><td style="padding: 10px 0; color: #333333; line-height: 1.5; white-space: pre-wrap;">' + message + '</td></tr>' +
          '</table>' +
          '<div style="margin-top: 26px; padding-top: 18px; border-top: 1px solid #EAEAEA; text-align: center;">' +
            '<a href="' + waUrl + '" style="background-color: #25D366; color: #FFFFFF; font-weight: bold; padding: 12px 22px; border-radius: 6px; text-decoration: none; display: inline-block; margin-right: 8px;">Reply on WhatsApp</a>' +
            '<a href="tel:' + phone + '" style="background-color: #C0392B; color: #FFFFFF; font-weight: bold; padding: 12px 22px; border-radius: 6px; text-decoration: none; display: inline-block;">Call Directly</a>' +
          '</div>' +
        '</div>' +
        '<div style="background-color: #F8F8F8; padding: 14px 20px; text-align: center; font-size: 12px; color: #777777; border-top: 1px solid #EAEAEA;">' +
          'Shapes Uniform B2B Lead System · Chembur, Mumbai · Pan-India Dispatch' +
        '</div>' +
      '</div>';

    MailApp.sendEmail({
      to: "shapesuniform@gmail.com",
      subject: emailSubject,
      htmlBody: htmlTemplate
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Shapes Uniform Google Sheets Webhook is active and listening for POST inquiries.")
    .setMimeType(ContentService.MimeType.TEXT);
}

