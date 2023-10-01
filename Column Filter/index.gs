var csvData = null;
var selectedColumns = [];

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("CSV Column Filter")
    .addItem("Import CSV", "showDialog")
    .addToUi();
}

function showDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile("index")
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, "CSV Import");
}

function importCSVData(csv, columns) {
  // Process the CSV data
  try {
    var parsedCSV = Utilities.parseCsv(csv);
    var sheet = SpreadsheetApp.getActiveSheet();
    var headerRow = parsedCSV[0];

    // Validate
    var selectedIndices = [];
    for (var i = 0; i < columns.length; i++) {
      var columnIndex = headerRow.indexOf(columns[i]);
      if (columnIndex !== -1) {
        selectedIndices.push(columnIndex);
      }
    }

    // Import data into the Google Sheet
    var dataToImport = [];
    for (var rowIdx = 1; rowIdx < parsedCSV.length; rowIdx++) {
      var rowData = [];
      for (var colIdx = 0; colIdx < selectedIndices.length; colIdx++) {
        rowData.push(parsedCSV[rowIdx][selectedIndices[colIdx]]);
      }
      dataToImport.push(rowData);
    }

    sheet
      .getRange(
        sheet.getLastRow() + 1,
        1,
        dataToImport.length,
        dataToImport[0].length
      )
      .setValues(dataToImport);

    return "Import successful!";
  } catch (error) {
    return "Error: " + error.message;
  }
}

function setCSVData(data) {
  csvData = data;
}

function setSelectedColumns(columns) {
  selectedColumns = columns;
}

function getCSVData() {
  return csvData;
}

function getSelectedColumns() {
  return selectedColumns;
}
