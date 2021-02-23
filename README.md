# tree_map_data_scraping

### Authors: Philadelphia Phlask Team

## Project Summary
This project contains a JavaScript-based web scraping automation tool for Chrome browser.  This project requires the Puppeteer dependency install.

Running the script executes a series of headless HTML calls to the  [Open Tree Map Project Website](https://www.opentreemap.org/).  

## Script Execution Results
1.  Obtains edible tree data for Philadelphia County from The Open Tree Map website
2. captures a screenshot of each site query (includes number of results found by query)
3. Creates a folder for tree data within a chosen project folder
4. Populates the folder with downloaded CSV files 

__The runtime for this script is *approximately 3 minutes.*__


### SET UP/RUN LOCALLY
1. Clone this repository
2. Ensure you have Yarn (or the package manager of your choice) installed on your machine
3. Run yarn install
4. Run yarn start
5. Use yarn add puppeteer from the command line 
6. Run the script on the command line using the command node treeMapScraper.js

### TREE TYPES RETURNED
  "Allegheny Serviceberry"
  "Apple Serviceberry"
  "Canadian Serviceberry"
  "Downy Serviceberry"
  "Serviceberry [Amelanchier spp]"
  "Mulberry"
  "Red Mulberry"
  "White Mulberry"
  "Ginkgo"

  ### ScreenShots
  ![Tree Map Site Searchbar](/READMEScreenshots/SearchBar.png)
Format: ![Site searchbar](https://github.com/phlask/tree_map_data_scraping/READMEScreenshots/SearchBar.png)

  ![Search by Speacies Populated](/READMEScreenshots/searchBySpecies.png)
Format: ![Search species input](https://github.com/phlask/tree_map_data_scraping/READMEScreenshots/searchBySpecies.png)

![Search by Location Entered](/READMEScreenshots/SearchByLocation.png)
Format: ![Search by location predictive search entry](https://github.com/phlask/tree_map_data_scraping/READMEScreenshots/SearchByLocation.png)

![CSV File Output](/READMEScreenshots/CSV-Output.png)
Format: ![Search Results as a table](https://github.com/phlask/tree_map_data_scraping/READMEScreenshots/CSV-Output.png)