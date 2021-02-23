const puppeteer = require("puppeteer");

//tree map URL
const url = "https://www.opentreemap.org/phillytreemap/map/";

//Edible trees dataset name list
const edibleTreeList = [
  "Allegheny Serviceberry",
  "Apple Serviceberry",
  "Canadian Serviceberry",
  "Downy Serviceberry",
  "Serviceberry [Amelanchier spp]",
  "Mulberry",
  "Red Mulberry",
  "White Mulberry",
  "Ginkgo",
];

async function run() {
  //function runs once for each tree in the edibleTreeList array
  for (const tree of edibleTreeList) {

    //launches headless browser, visits opentreemap.com
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //creates the 'treeOutput' folder within the project folder. All CSV files will populate there
    await page._client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: "treeOutput/",
    });

    //headless call to URL
    await page.goto(url);

    //waits for site to load/render
    await page.waitForSelector("#boundary-typeahead");
    //Types 'Philadelphia' and selects the 'Philadelphia County option from the autopopulated dropdown list
    await page.click("#boundary-typeahead");
    await page.type("#boundary-typeahead", "Philadelphia");
    const locationSuggestionElement = ".tt-dataset-1 > div:nth-child(1)";
    await page.waitForSelector(locationSuggestionElement);
    await page.click(locationSuggestionElement);

    //Types tree species from the array list and selects matching type from autocomplete/suggestion list
    await page.waitForSelector("#species-typeahead");
    await page.click("#species-typeahead");
    await page.type("#species-typeahead", tree);
    const treeSuggestionElement = ".tt-dataset-0 > div:nth-child(1)";
    await page.waitForSelector(treeSuggestionElement);
    await page.click(treeSuggestionElement);

    //clicks submit button and creates screenshot rendering for confirmation
    await page.click("#perform-search");
    await page.waitForNavigation();
    await page.screenshot({ path: `${tree}-search.png` });

    //selects the download tree information button to create and download CSV
    await page.click("a.btn.btn-primary.btn-xs.exportBtn.hidden-xs");
    await page.waitForTimeout(15000);//added to allow for downloads before re-rendering page
    await page.screenshot({ path: `${tree}-confirmation.png` });

  browser.close();
  }
}
run();
