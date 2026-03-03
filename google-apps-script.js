/**
 * ============================================
 * Blu Manor — Google Apps Script Web App
 * ============================================
 *
 * Receives intake form submissions from blumanor.org/apply.html
 * and writes them to the "Applications" sheet.
 *
 * DEPLOYMENT:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Paste this code → Deploy → New Deployment → Web app
 * 3. Execute as: Me | Access: Anyone
 * 4. Copy the URL → paste into js/apply.js (SCRIPT_URL)
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Applications');

    if (!sheet) {
      sheet = ss.insertSheet('Applications');
    }

    var row = [
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.dob || '',
      data.phone || '',
      data.email || '',
      data.currentAddress || '',
      data.supervision || '',
      data.referringAgency || '',
      data.officerContact || '',
      data.employer || '',
      data.position || '',
      data.monthlyIncome || '',
      data.workSchedule || '',
      data.moveInDate || '',
      data.emergencyContact || '',
      data.ackRules || '',
      data.signature || '',
      data.signatureDate || ''
    ];

    sheet.appendRow(row);

    // Email notification on every new application
    sendNotification(data);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Application saved'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Blu Manor Forms API is running.'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Email notification on new application
 * Uncomment the sendNotification() call in doPost to enable
 */
function sendNotification(data) {
  var subject = 'New Housing Application — ' + (data.fullName || 'Unknown');
  var body = 'New application received:\n\n' +
    'Name: ' + (data.fullName || 'N/A') + '\n' +
    'Phone: ' + (data.phone || 'N/A') + '\n' +
    'Email: ' + (data.email || 'N/A') + '\n' +
    'Supervision: ' + (data.supervision || 'N/A') + '\n' +
    'Move-In Date: ' + (data.moveInDate || 'N/A') + '\n' +
    'Monthly Income: ' + (data.monthlyIncome || 'N/A') + '\n' +
    'Emergency Contact: ' + (data.emergencyContact || 'N/A') + '\n\n' +
    'View full details in the Applications sheet.';

  MailApp.sendEmail('info@blumanor.org', subject, body);
}
