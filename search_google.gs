// This sheet is using google API for searching
// https://developers.google.com/custom-search/v1/overview  ( you will need to go there to get your API key to put in script properties.
// https://developers.google.com/custom-search/docs/tutorial/creatingcse
//
// Create custom search engine
// Go to: https://cse.google.com/cse/all
// Use this: https://stackoverflow.com/a/11206266/12444763


function search_all() {
  // Position in sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var unsplash_search = SpreadsheetApp.setActiveSheet(ss.getSheetByName("unsplash_search"));
  
  // Things tht go into the request
  var BASE_URL = "https://www.googleapis.com/customsearch/v1?",          // API URL
      URL = `${BASE_URL}key=${google_key}&cx=${cseID}&searchType=image&q=${querry}`,      // Actuall URL we will call
      querry = "https://images.unsplash.com/photo-1576534125507-93240225acd9?ixlib";             // What we will search for
  
  var headers = {
  };
  
  var options = {
    "method": "GET",
    "headers": headers,
  };
  
  // Run the search
  var response = UrlFetchApp.fetch(URL, options);
  Logger.log(response)
  
  // Clean up and assable
  var responseData = JSON.parse(response.getContentText());
  //Logger.log(responseData)
  var data = responseData.items
  
  // Clear content except header all the way to "Z" column. TODO: make it find cells with content and cleare those.
  unsplash_search.getRange('A2:Z').clearContent();
  // This decides where to post. Starts after header.
  var lastRow = Math.max(unsplash_search.getRange(2, 1).getLastRow(),1);
  var index = 0;
    
  // Populate sheet by looping thru records in our list of dictonaries and pulling data we need into correct columns.
  for(var i = 0; i < data.length; i++ )
  {
    unsplash_search.getRange(index + lastRow + i, 1).setValue(data[i]["title"]);
    var contextLink = (data[i] && data[i].image && data[i].image.contextLink)||""; unsplash_search.getRange(index + lastRow + i, 2).setValue(contextLink);
    var link = (data[i]["link"])||""; unsplash_search.getRange(index + lastRow + i, 3).setValue(link);
    var image = '=image("' +link+ '")' ; unsplash_search.getRange(index + lastRow + i, 4).setValue(image);
    
  }
  
// This actually posts data when it's ready instead of making many changes one at a time.
  unsplash_search.sort(1);  // sort by column 1
SpreadsheetApp.flush();
}
