function importCSVFromGoogleDrive() {

    var file = DriveApp.getFilesByName("XXXXXXXXXXXXXXXXXXXXXXX.csv").next();
    var csvString = file.getBlob().getDataAsString()
    csvString = csvString.replace(/,/g, ".")
    csvString = csvString.replace(/\|/g, ",")
    var csvData = Utilities.parseCsv(csvString);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('XXXXXXXXXXXXXXXXX');
    sheet.clear();
    sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
  
  }