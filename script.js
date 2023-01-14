

// version 



const searchResultsContainer = document.getElementById('search-results-container');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', async () => {
  // Get the search query from the input field
  const query = searchInput.value;

  // Perform the search with the query
  const searchResults = await search(query);

  if (!searchResults || !searchResults.length) {
//    searchResultsContainer.innerHTML = '<div class="search-result">No results found</div>';
    if (searchResults == true) {
      searchResultsContainer.innerHTML = `<div id="results" class="search-result">${searchResults}</div>`;
    }

    else {
      searchResultsContainer.innerHTML = `<div id="no-results" class="search-result">${searchResults}</div>`;
    }

    return;
  }

  // Create HTML for search results
  let resultsHTML = '';
  for (const result of searchResults) {
    resultsHTML += `<div class="search-result">${result.title}</div>`;
  }

  // Add search results to container
  searchResultsContainer.innerHTML = resultsHTML;
});

searchInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    searchButton.click();
  }
});

async function search(query) {
  try {
    // Perform search
    const results = await fetch(`https://api.namemc.com/server/mc.hypixel.net/likes?profile=${query}`);
    const data = await results.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
