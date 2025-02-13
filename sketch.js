let img1, img2;
let pinCoordinates = [];
let source;
let link;
let hyperlink;
let dropdown;
let selectedOption;

// The map's orginal size in order to coordinates as percentages relative to it
const originalImgWidth = 15748;
const originalImgHeight = 10876;

function preload() {
  img1 = loadImage('assets/FiveCountries.png');
  img2 = loadImage('assets/pin.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  dropdown = select('#country-select');
  dropdown.changed(handleDropdownChange);

    // Create hyperlink only once
    hyperlink = createA("", "", "_blank");
    hyperlink.style("font-size", "14px");
    hyperlink.style("color", "blue");
}


function handleDropdownChange() {
  selectedOption = int(dropdown.value());
  console.log("Selected option:", selectedOption);
  selectCountries();
}


function selectCountries() {
  switch (selectedOption) {
    case 0:
      pinCoordinates = [
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 12477 / originalImgWidth, y: 4220 / originalImgHeight},
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight},
        {x: 13015 / originalImgWidth, y: 6550 / originalImgHeight},
        {x: 10800 / originalImgWidth, y: 4450 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SP.POP.TOTL?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 1:
      pinCoordinates = [
        {x: 8100 / originalImgWidth, y: 3730 / originalImgHeight},
        {x: 7840 / originalImgWidth, y: 3575 / originalImgHeight},
        {x: 7220 / originalImgWidth, y: 4007 / originalImgHeight},
        {x: 15660 / originalImgWidth, y: 6250 / originalImgHeight},
        {x: -70 / originalImgWidth, y: 6700 / originalImgHeight}
      ];
      link = "https://worldpopulationreview.com/country-rankings/smallest-countries";
      source = "Source: World Population Review. ";
      break;
    case 2:
      pinCoordinates = [
        {x: 13190 / originalImgWidth, y: 4855 / originalImgHeight},
        {x: 7825 / originalImgWidth, y: 3578 / originalImgHeight},
        {x: 12830 / originalImgWidth, y: 6075 / originalImgHeight},
        {x: 13230 / originalImgWidth, y: 4850 / originalImgHeight},
        {x: 7220 / originalImgWidth, y: 4007 / originalImgHeight}
      ];
      link = "https://ourworldindata.org/most-densely-populated-countries";
      source = "Source: Our World in Data. ";
      break;
    case 3:
      pinCoordinates = [
        {x: 6000 / originalImgWidth, y: 2200 / originalImgHeight},
        {x: 4900 / originalImgWidth, y: 9190 / originalImgHeight},
        {x: 6700 / originalImgWidth, y: 4800 / originalImgHeight},
        {x: 12477 / originalImgWidth, y: 3400 / originalImgHeight},
        {x: 8200 / originalImgWidth, y: 7560 / originalImgHeight}
      ];
      link = "https://www.globalcitizensolutions.com/countries-with-lowest-population-density/";
      source = "Source: Global Citizen Solutions. ";
      break;
    case 4:
      pinCoordinates = [
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight},
        {x: 12477 / originalImgWidth, y: 4220 / originalImgHeight},
        {x: 14200 / originalImgWidth, y: 4080 / originalImgHeight},
        {x: 7900 / originalImgWidth, y: 3205 / originalImgHeight},
        {x: 7400 / originalImgWidth, y: 3160 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 5:
      pinCoordinates = [
        {x: 7750 / originalImgWidth, y: 6200 / originalImgHeight},
        {x: 4540 / originalImgWidth, y: 5880 / originalImgHeight},
        {x: 8925 / originalImgWidth, y: 7805 / originalImgHeight},
        {x: 6680 / originalImgWidth, y: 5440 / originalImgHeight},
        {x: 9635 / originalImgWidth, y: 5445 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 6:
      pinCoordinates = [
        {x: 12830 / originalImgWidth, y: 6075 / originalImgHeight},
        {x: 7805 / originalImgWidth, y: 3200 / originalImgHeight},
        {x: 10045/ originalImgWidth, y: 4670 / originalImgHeight},
        {x: 7160 / originalImgWidth, y: 3105 / originalImgHeight},
        {x: 13190 / originalImgWidth, y: 4855 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 7:
      pinCoordinates = [
        {x: 9000 / originalImgWidth, y: 6385 / originalImgHeight},
        {x: 9005 / originalImgWidth, y: 5760 / originalImgHeight},
        {x: 8600/ originalImgWidth, y: 5720 / originalImgHeight},
        {x: 9890 / originalImgWidth, y: 5885 / originalImgHeight},
        {x: 8600 / originalImgWidth, y: 6385 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 8:
      pinCoordinates = [
        {x: 8450 / originalImgWidth, y: 3250 / originalImgHeight},
        {x: 8228 / originalImgWidth, y: 3500 / originalImgHeight},
        {x: 8870 / originalImgWidth, y: 3050 / originalImgHeight},
        {x: 8895 / originalImgWidth, y: 3225 / originalImgHeight},
        {x: 8870 / originalImgWidth, y: 3420 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 9:
      pinCoordinates = [
        {x: 8600 / originalImgWidth, y: 8000 / originalImgHeight},
        {x: 8280 / originalImgWidth, y: 7500 / originalImgHeight},
        {x: 3585 / originalImgWidth, y: 5900 / originalImgHeight},
        {x: 9040 / originalImgWidth, y: 7720 / originalImgHeight},
        {x: 8600 / originalImgWidth, y: 7500 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 10:
      pinCoordinates = [
        {x: 14880 / originalImgWidth, y: 6550 / originalImgHeight},
        {x: 13015 / originalImgWidth, y: 6550 / originalImgHeight},
        {x: 7800 / originalImgWidth, y: 5680 / originalImgHeight},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight}
      ];
      link = "https://www.weforum.org/stories/2021/03/these-are-the-top-ten-countries-for-linguistic-diversity/";
      source = "Source: We Forum. ";
      break;
    case 11:
      pinCoordinates = [
        {x: 12000 / originalImgWidth, y: 4800 / originalImgHeight},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 11720 / originalImgWidth, y: 4450 / originalImgHeight},
        {x: 10045 / originalImgWidth, y: 4670 / originalImgHeight},
        {x: 10800 / originalImgWidth, y: 4450 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      source = "Source: Wikipedia (UChicago AQLI 2022). ";
      break;
    case 12:
      pinCoordinates = [
        {x: 345 / originalImgWidth, y: 545 / originalImgHeight},
        {x: 1610 / originalImgWidth, y: 511 / originalImgHeight},
        {x: 1625 / originalImgWidth, y: 507 / originalImgHeight},
        {x: 805 / originalImgWidth, y: 198 / originalImgHeight},
        {x: 335 / originalImgWidth, y: 659 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      source = "Source: Wikipedia (UChicago AQLI 2022). ";
      break;
    // Add more cases for other options
    default:
      pinCoordinates = [];
      source = "";
      link  = ""; 
      break;
  }
}


function draw() {
  background(255);

  let imgAspect = img1.width / img1.height;
  let canvasAspect = width / height;
    
  let imgWidth, imgHeight;
    
  if (imgAspect > canvasAspect) {
    imgWidth = width;
    imgHeight = width / imgAspect;
  } else {
    imgHeight = height;
    imgWidth = height * imgAspect;
  }
    
  let x = (width - imgWidth) / 2;
  let y = (height - imgHeight) / 2;
  
  image(img1, x, y, imgWidth, imgHeight);

  for (let i = 0; i < pinCoordinates.length; i++) {
    let pin = pinCoordinates[i];
    let pinX = x + pin.x * imgWidth;
    let pinY = y + pin.y * imgHeight;
    image(img2, pinX, pinY, 14.3, 30);
  }

  fill(0);
  textSize(14);
  textAlign(LEFT, CENTER);

  let sourceWidth = textWidth(source);
  let linkWidth = textWidth(link);
  let totalWidth = sourceWidth + linkWidth + 10;

  let startX = width / 2 - totalWidth / 2;

  text(source, startX, height - 20);

  updateHyperlink(startX + sourceWidth + 5);
}

function updateHyperlink(hyperlinkX) {
  if (link) {
    hyperlink.html(link);
    hyperlink.attribute("href", link);
    hyperlink.position(hyperlinkX, height - 30);
  } else {
    hyperlink.html("");
  }
}

// This is just a helper function
function mousePressed() {
  let imgAspect = img1.width / img1.height;
  let canvasAspect = width / height;
    
  let imgWidth, imgHeight;
    
  if (imgAspect > canvasAspect) {
    imgWidth = width;
    imgHeight = width / imgAspect;
  } else {
    imgHeight = height;
    imgWidth = height * imgAspect;
  }

  let xOffset = (width - imgWidth) / 2;
  let yOffset = (height - imgHeight) / 2;

  let rawX = mouseX - xOffset;
  let rawY = mouseY - yOffset;

  // Convert back to original image scale
  let originalX = (rawX / imgWidth) * img1.width;
  let originalY = (rawY / imgHeight) * img1.height;

  console.log(`{x: ${originalX.toFixed(2)}, y: ${originalY.toFixed(2)}},`);
}
