document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var tab = tabs[0];
    var videoTitle = tab.title.replace("- YouTube", "").trim();
    var searchQuery = videoTitle;
    console.log(searchQuery);
    searchLyrics(searchQuery)
      .then(lyrics => {
        if (lyrics) {
          document.getElementById('lyrics').innerText = lyrics;
        } else {
          document.getElementById('lyrics').innerText = 'Lyrics not found.';
        }
      })
      .catch(error => {
        console.error(error);
        document.getElementById('lyrics').innerText = 'An error occurred while searching for lyrics.';
      });
  });
});



async function searchLyrics(query) {
  var searchUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(query)}`;
  const response = await fetch(searchUrl);
  const json = await response.json();
  if (json.lyrics) {
    return json.lyrics;
  } else {
    return null;
  }
}
