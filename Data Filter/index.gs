var csvData = null;
var selectedColumns = [];
var filteredData = null;

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Data Filter')
      .addItem('Import CSV', 'showDialog')
      .addToUi();
}

function showDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'CSV Import');
}

function importCSVData(csv, columns) {
  // Process the CSV data
  try {
    // Use the filtered data or the original CSV data
    var dataToImport = filteredData || csv;

    var parsedCSV = Utilities.parseCsv(dataToImport);
    var sheet = SpreadsheetApp.getActiveSheet();

    // Import data into the Google Sheet
    sheet.getRange(sheet.getLastRow() + 1, 1, parsedCSV.length, parsedCSV[0].length).setValues(parsedCSV);
    
    return 'Import successful!';
  } catch (error) {
    return 'Error: ' + error.message;
  }
}

function setCSVData(data) {
  csvData = data;
}

function setSelectedColumns(columns) {
  selectedColumns = columns;
}

function setFilteredData(data) {
  filteredData = data;
}

function getCSVData() {
  return csvData;
}

function getSelectedColumns() {
  return selectedColumns;
}

function getFilteredData() {
  return filteredData;
}
