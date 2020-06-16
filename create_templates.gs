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
  unsplash_search.setColumnWidths(1, 4, 250);
  unsplash_search.setRowHeights(2, 10, 200);
  unsplash_search.getActiveRangeList().setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
    // Content
  unsplash_search.getRange("A1").activate();
  unsplash_search.getCurrentCell().setValue("Title");
  unsplash_search.getRange("B1").activate();
  unsplash_search.getCurrentCell().setValue("Link to page");
  unsplash_search.getRange("C1").activate();
  unsplash_search.getCurrentCell().setValue("Link to Image");
  unsplash_search.getRange("D1").activate();
  unsplash_search.getCurrentCell().setValue("Image");
  unsplash_search.getRange("E1").activate();
  unsplash_search.getCurrentCell().setValue("photo URL-->");

  
  SpreadsheetApp.flush();
}
