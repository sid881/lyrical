chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  // Callback function executed after the query is completed
  // The retrieved tab information is passed as an argument to this function
  // You can perform operations with the retrieved tabs here
  console.log(tabs);
});
