// Base URL for GitHub repository
const baseURL = "https://github.com/siamtx/wdd230";

// Reference to links.json file
const linksURL = "https://github.com/siamtx/wdd230/data/links.json";

// Asynchronous function to fetch the data from links.json
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);

}

getLinks();

// 