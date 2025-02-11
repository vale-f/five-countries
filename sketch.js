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
        {x: 1420 / originalImgWidth, y: 572 / originalImgHeight},
        {x: 1224 / originalImgWidth, y: 392 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SP.POP.TOTL?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 1:
      pinCoordinates = [
        {x: 978 / originalImgWidth, y: 323 / originalImgHeight},
        {x: 270 / originalImgWidth, y: 615 / originalImgHeight},
        {x: 1637 / originalImgWidth, y: 573 / originalImgHeight},
        {x: 699 / originalImgWidth, y: 794 / originalImgHeight},
        {x: 640 / originalImgWidth, y: 460 / originalImgHeight}
      ];
      link = "https://worldpopulationreview.com/country-rankings/smallest-countries";
      source = "Source: World Population Review. ";
      break;
    case 2:
      pinCoordinates = [
        {x: 1422 / originalImgWidth, y: 421 / originalImgHeight},
        {x: 953 / originalImgWidth, y: 315 / originalImgHeight},
        {x: 1390 / originalImgWidth, y: 528 / originalImgHeight},
        {x: 1428 / originalImgWidth, y: 418 / originalImgHeight},
        {x: 903 / originalImgWidth, y: 349 / originalImgHeight}
      ];
      link = "https://ourworldindata.org/most-densely-populated-countries";
      source = "Source: Our World in Data. ";
      break;
    case 3:
      pinCoordinates = [
        {x: 805 / originalImgWidth, y: 198 / originalImgHeight},
        {x: 699 / originalImgWidth, y: 794 / originalImgHeight},
        {x: 863 / originalImgWidth, y: 410 / originalImgHeight},
        {x: 1335 / originalImgWidth, y: 300 / originalImgHeight},
        {x: 995 / originalImgWidth, y: 650 / originalImgHeight}
      ];
      link = "https://www.globalcitizensolutions.com/countries-with-lowest-population-density/";
      source = "Source: Global Citizen Solutions. ";
      break;
    case 4:
      pinCoordinates = [
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight},
        {x: 1360 / originalImgWidth, y: 370 / originalImgHeight},
        {x: 1505 / originalImgWidth, y: 355 / originalImgHeight},
        {x: 970 / originalImgWidth, y: 285 / originalImgHeight},
        {x: 922 / originalImgWidth, y: 272 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 5:
      pinCoordinates = [
        {x: 952 / originalImgWidth, y: 537 / originalImgHeight},
        {x: 673 / originalImgWidth, y: 509 / originalImgHeight},
        {x: 1050 / originalImgWidth, y: 681 / originalImgHeight},
        {x: 853 / originalImgWidth, y: 472 / originalImgHeight},
        {x: 1108 / originalImgWidth, y: 478 / originalImgHeight}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 6:
      pinCoordinates = [
        {x: 950 / originalImgWidth, y: 283 / originalImgHeight},
        {x: 1390 / originalImgWidth, y: 528 / originalImgHeight},
        {x: 1422 / originalImgWidth, y: 421 / originalImgHeight},
        {x: 898 / originalImgWidth, y: 268 / originalImgHeight},
        {x: 1174 / originalImgWidth, y: 402 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 7:
      pinCoordinates = [
        {x: 1053 / originalImgWidth, y: 556 / originalImgHeight},
        {x: 1053 / originalImgWidth, y: 506 / originalImgHeight},
        {x: 1016 / originalImgWidth, y: 502 / originalImgHeight},
        {x: 1125 / originalImgWidth, y: 520 / originalImgHeight},
        {x: 1023 / originalImgWidth, y: 556 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 8:
      pinCoordinates = [
        {x: 995 / originalImgWidth, y: 288 / originalImgHeight},
        {x: 986 / originalImgWidth, y: 303 / originalImgHeight},
        {x: 1032 / originalImgWidth, y: 265 / originalImgHeight},
        {x: 1040 / originalImgWidth, y: 275 / originalImgHeight},
        {x: 1040 / originalImgWidth, y: 299 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 9:
      pinCoordinates = [
        {x: 1023 / originalImgWidth, y: 690 / originalImgHeight},
        {x: 995 / originalImgWidth, y: 650 / originalImgHeight},
        {x: 580 / originalImgWidth, y: 520 / originalImgHeight},
        {x: 1065 / originalImgWidth, y: 668 / originalImgHeight},
        {x: 1024 / originalImgWidth, y: 650 / originalImgHeight}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 10:
      pinCoordinates = [
        {x: 1575 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 1420 / originalImgWidth, y: 572 / originalImgHeight},
        {x: 950 / originalImgWidth, y: 500 / originalImgHeight},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight}
      ];
      link = "https://www.weforum.org/stories/2021/03/these-are-the-top-ten-countries-for-linguistic-diversity/";
      source = "Source: We Forum. ";
      break;
    case 11:
      pinCoordinates = [
        {x: 1322 / originalImgWidth, y: 417 / originalImgHeight},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight},
        {x: 1301 / originalImgWidth, y: 392 / originalImgHeight},
        {x: 1167 / originalImgWidth, y: 408 / originalImgHeight},
        {x: 1224 / originalImgWidth, y: 392 / originalImgHeight}
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
