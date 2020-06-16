//This project will require you to:
//1. make correctly named sheets for every function and configure headers.   TODO: fix initial sheet creation
//2. Correctly add all needed credentailas to project properties so they can be called from there. https://developers.google.com/apps-script/reference/properties

//*******************************************************************************************************************************************
// Start of code
// Create basic interface for manuall trigering sync ( normally it's expected you will switch on daily sync )
// https://script.google.com/home/triggers
// Menu options
var ui = SpreadsheetApp.getUi();
function onOpen() {
  ui.createMenu("Unsplash")
  .addItem("Create Sheet", "make_template")
  .addItem("Run Search", "search_all")
  .addToUi();
};

// Get all tokens and codes from project properties
var scriptProperties = PropertiesService.getScriptProperties(),
    google_key = scriptProperties.getProperty("google_API_token"),  // in TOP left File > Project Properties > Script Properties
    cseID = scriptProperties.getProperty("Search_engine_ID");
