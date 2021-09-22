function createCsvContent(values, delimiter) {

    // This converts the values 2D array into a simple array of strings delimited by the delimiter
    const stringArray = values.map(row => row.join(delimiter))
    // Then it joins all the strings with newlines
    const output = stringArray.join("\n")
  
    return output
  }
  
  
  function createCsv() {
    // Get all the values from the sheet as a 2D array
    const file = SpreadsheetApp.getActive();
    const sheet = file.getSheetByName("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    const range = sheet.getDataRange();
    const values = range.getValues();
  
    // call the function to create the csv-like content
    const csvContent = createCsvContent(values, "|")
  
    // create the file in drive
    //DriveApp.createFile('reprocess', csvContent, MimeType.PLAIN_TEXT)
    DriveApp.getFileById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").setContent(csvContent)
  }