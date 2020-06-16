// This set of scripts is responsible for creating template


// Main dashboard
function make_template() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.insertSheet().setName("unsplash_search");
  var unsplash_search = spreadsheet.getSheetByName("unsplash_search");
  
  // Formating
  unsplash_search.setFrozenRows(1) // header
// unsplash_search.setFrozenColumns(0)
  unsplash_search.getRange("1:1").activate();
  unsplash_search.getActiveRangeList().setHorizontalAlignment("center").setFontWeight("bold"); // center and bold
  unsplash_search.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);  // Clip when text to long
//  unsplash_search.getRange("A:B").activate();
//  unsplash_search.getActiveRangeList().setHorizontalAlignment("center").setFontWeight("bold"); // center and bold
//  unsplash_search.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);  // Clip when text to long
  
  SpreadsheetApp.flush();
}
