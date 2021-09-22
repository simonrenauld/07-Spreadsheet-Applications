function onOpen() {

    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = ss.getSheets()[6];
    
    var menuItems = [
        {name: 'Get Data', functionName: 'readData'}
    ];
        spreadsheet.addMenu('Report', menuItems);
    }
    
    
    // Replace the variables in this block with your values. Port ':1433' is not necessary
     var hostName = 'XXXXXXX.database.windows.net:1433;'
     var db = 'XXXXX;';
     var user = 'XXXXX.com@XXXsqlswerver';
     var userPwd = 'XXXXXXXXXXXXXXXXX';
    
    
    
     var dbUrl = 'jdbc:sqlserver://'+hostName + 'databaseName='+db; 
    
    
    function readData() {
     var conn = Jdbc.getConnection(dbUrl, user, userPwd);
     var stmt = conn.createStatement();
    
    
     // Place your query below
     var results = stmt.executeQuery('SELECT * FROM [dbo].[XXXXXXXXXXXXXXXXXXXXXXXXXXXx]');
     var metaData=results.getMetaData();
     var numCols = metaData.getColumnCount();
     var sheet = SpreadsheetApp.getActiveSheet();
    
     sheet.clearContents();
    
     var arr=[];
    
     for (var col = 0; col < numCols; col++) {
      arr.push(metaData.getColumnName(col + 1));
     }
    
     sheet.appendRow(arr);
    
    
     while (results.next()) {
      arr=[];
    
      for (var col = 0; col < numCols; col++) {
    
       arr.push(results.getString(col + 1));
      }
     sheet.appendRow(arr);
    
    }
    
    results.close();
    stmt.close();
    
    sheet.autoResizeColumns(1, numCols+1);