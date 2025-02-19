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
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight, name: "1. India"},
        {x: 12477 / originalImgWidth, y: 4220 / originalImgHeight, name: "2. China"},
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight, name: "3. United States"},
        {x: 13015 / originalImgWidth, y: 6550 / originalImgHeight, name: "4. Indonesia"},
        {x: 10800 / originalImgWidth, y: 4450 / originalImgHeight, name: "5. Pakistan"}
      ];
      link = "https://data.worldbank.org/indicator/SP.POP.TOTL?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 1:
      pinCoordinates = [
        {x: 8100 / originalImgWidth, y: 3730 / originalImgHeight, name: "1. Vatican City"},
        {x: 7840 / originalImgWidth, y: 3575 / originalImgHeight, name: "2. Monaco"},
        {x: 7220 / originalImgWidth, y: 4007 / originalImgHeight, name: "3. Gibraltar"},
        {x: 15660 / originalImgWidth, y: 6250 / originalImgHeight, name: "4. Tokelau"},
        {x: -70 / originalImgWidth, y: 6700 / originalImgHeight, name: "5. Nauru"}
      ];
      link = "https://worldpopulationreview.com/country-rankings/smallest-countries";
      source = "Source: World Population Review. ";
      break;
    case 2:
      pinCoordinates = [
        {x: 13190 / originalImgWidth, y: 4855 / originalImgHeight, name: "1. Macao"},
        {x: 7825 / originalImgWidth, y: 3578 / originalImgHeight, name: "2. Monaco"},
        {x: 12830 / originalImgWidth, y: 6075 / originalImgHeight, name: "3. Singapore"},
        {x: 13230 / originalImgWidth, y: 4850 / originalImgHeight, name: "4. Hong Kong"},
        {x: 7220 / originalImgWidth, y: 4007 / originalImgHeight, name: "5. Gibraltar"}
      ];
      link = "https://ourworldindata.org/most-densely-populated-countries";
      source = "Source: Our World in Data. ";
      break;
    case 3:
      pinCoordinates = [
        {x: 6000 / originalImgWidth, y: 2200 / originalImgHeight, name: "1. Greenland"},
        {x: 4900 / originalImgWidth, y: 9190 / originalImgHeight, name: "2. Falkland Islands"},
        {x: 6700 / originalImgWidth, y: 4800 / originalImgHeight, name: "3. Western Sahara"},
        {x: 12477 / originalImgWidth, y: 3400 / originalImgHeight, name: "4. Mongolia"},
        {x: 8200 / originalImgWidth, y: 7560 / originalImgHeight, name: "5. Namibia"}
      ];
      link = "https://www.globalcitizensolutions.com/countries-with-lowest-population-density/";
      source = "Source: Global Citizen Solutions. ";
      break;
    case 4:
      pinCoordinates = [
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight, name: "1. United States"},
        {x: 12477 / originalImgWidth, y: 4220 / originalImgHeight, name: "2. China"},
        {x: 14200 / originalImgWidth, y: 4080 / originalImgHeight, name: "3. Japan"},
        {x: 7900 / originalImgWidth, y: 3205 / originalImgHeight, name: "4. Germany"},
        {x: 7400 / originalImgWidth, y: 3160 / originalImgHeight, name: "5. United Kingdom"}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 5:
      pinCoordinates = [
        {x: 7750 / originalImgWidth, y: 6200 / originalImgHeight, name: "1. São Tomé and Príncipe"},
        {x: 4540 / originalImgWidth, y: 5880 / originalImgHeight, name: "2. Suriname"},
        {x: 8925 / originalImgWidth, y: 7805 / originalImgHeight, name: "3. Lesotho"},
        {x: 6680 / originalImgWidth, y: 5440 / originalImgHeight, name: "4. Guinea-Bissau"},
        {x: 9635 / originalImgWidth, y: 5445 / originalImgHeight, name: "5. Djibouti"}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      source = "Source: Wikipedia. ";
      break;
    case 6:
      pinCoordinates = [
        {x: 12830 / originalImgWidth, y: 6075 / originalImgHeight, name: "1. Singapore"},
        {x: 7805 / originalImgWidth, y: 3200 / originalImgHeight, name: "2. Luxembourg"},
        {x: 10045/ originalImgWidth, y: 4670 / originalImgHeight, name: "3. Qatar"},
        {x: 7160 / originalImgWidth, y: 3105 / originalImgHeight, name: "4. Ireland"},
        {x: 13190 / originalImgWidth, y: 4855 / originalImgHeight, name: "5. Macao"}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 7:
      pinCoordinates = [
        {x: 9000 / originalImgWidth, y: 6385 / originalImgHeight, name: "1. Burundi"},
        {x: 9005 / originalImgWidth, y: 5760 / originalImgHeight, name: "2. South Sudan"},
        {x: 8600/ originalImgWidth, y: 5720 / originalImgHeight, name: "3. Central African Republic"},
        {x: 9890 / originalImgWidth, y: 5885 / originalImgHeight, name: "4. Somalia"},
        {x: 8600 / originalImgWidth, y: 6385 / originalImgHeight, name: "5. Democratic Republic of the Congo"}
      ];
      link = "https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      source = "Source: World Bank. ";
      break;
    case 8:
      pinCoordinates = [
        {x: 8450 / originalImgWidth, y: 3250 / originalImgHeight, name: "1. Slovak Republic"},
        {x: 8228 / originalImgWidth, y: 3500 / originalImgHeight, name: "2. Slovenia"},
        {x: 8870 / originalImgWidth, y: 3050 / originalImgHeight, name: "3. Belarus"},
        {x: 8895 / originalImgWidth, y: 3225 / originalImgHeight, name: "4. Ukraine"},
        {x: 8870 / originalImgWidth, y: 3420 / originalImgHeight, name: "5. Moldova"}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 9:
      pinCoordinates = [
        {x: 8600 / originalImgWidth, y: 8000 / originalImgHeight, name: "1. South Africa"},
        {x: 8280 / originalImgWidth, y: 7500 / originalImgHeight, name: "2. Namibia"},
        {x: 3585 / originalImgWidth, y: 5900 / originalImgHeight, name: "3. Colombia"},
        {x: 9040 / originalImgWidth, y: 7720 / originalImgHeight, name: "4. Eswatini"},
        {x: 8600 / originalImgWidth, y: 7500 / originalImgHeight, name: "5. Botswana"}
      ];
      link = "https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      source = "Source: World Bank. ";
      break;
    case 10:
      pinCoordinates = [
        {x: 14880 / originalImgWidth, y: 6550 / originalImgHeight, name: "1. Papa New Guinea"},
        {x: 13015 / originalImgWidth, y: 6550 / originalImgHeight, name: "2. Indonesia"},
        {x: 7800 / originalImgWidth, y: 5680 / originalImgHeight, name: "3. Nigeria"},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight, name: "4. India"},
        {x: 2626 / originalImgWidth, y: 3950 / originalImgHeight, name: "5. United States"}
      ];
      link = "https://www.weforum.org/stories/2021/03/these-are-the-top-ten-countries-for-linguistic-diversity/";
      source = "Source: We Forum. ";
      break;
    case 11:
      pinCoordinates = [
        {x: 12000 / originalImgWidth, y: 4800 / originalImgHeight, name: "1. Bangladesh"},
        {x: 11480 / originalImgWidth, y: 4890 / originalImgHeight, name: "2. India"},
        {x: 11720 / originalImgWidth, y: 4450 / originalImgHeight, name: "3. Nepal"},
        {x: 10045 / originalImgWidth, y: 4670 / originalImgHeight, name: "4. Qatar"},
        {x: 10800 / originalImgWidth, y: 4450 / originalImgHeight, name: "5. Pakistan"}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      source = "Source: Wikipedia (UChicago AQLI 2022). ";
      break;
    case 12:
      pinCoordinates = [
        {x: 925 / originalImgWidth, y: 6200 / originalImgHeight, name: "1. Kiribati"},
        {x: 15425 / originalImgWidth, y: 5820 / originalImgHeight, name: "2. Federal States of Micronesia"},
        {x: 15600 / originalImgWidth, y: 5820 / originalImgHeight, name: "3. Marshall Islands"},
        {x: 6000 / originalImgWidth, y: 2200 / originalImgHeight, name: "4. Greenland"},
        {x: 200 / originalImgWidth, y: 7670 / originalImgHeight, name: "5. Cook Islands"}
      ];
      link = "https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      source = "Source: Wikipedia (UChicago AQLI 2022). ";
      break;
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

  // Render all the pins in the loop
  for (let i = 0; i < pinCoordinates.length; i++) {
    let pin = pinCoordinates[i];
    let pinX = x + pin.x * imgWidth;
    let pinY = y + pin.y * imgHeight;
  
    // Draw the pin first
    image(img2, pinX, pinY, 14.3, 30);
  }
  
  let activePins = [];

  for (let i = 0; i < pinCoordinates.length; i++) {
    let pin = pinCoordinates[i];
    let pinX = x + pin.x * imgWidth;
    let pinY = y + pin.y * imgHeight;

    let distance = dist(mouseX, mouseY, pinX, pinY);

    if (distance < 15) {
      activePins.push(pin); // Add pin to the active list if it is close to the mouse
    }
  }

  // Display labels for all active pins
  for (let i = 0; i < activePins.length; i++) {
    let pin = activePins[i];
    let pinX = x + pin.x * imgWidth;
    let pinY = y + pin.y * imgHeight;

    textSize(18);
    let boxWidth = textWidth(pin.name) + 15;
    let boxHeight = 25;

    let labelX = mouseX + 10;
    let labelY = mouseY - 10 + (i * (boxHeight + 5));  // Stack country names vertically
    
    // Box
    fill(255);
    stroke(0);
    rect(labelX, labelY, boxWidth, boxHeight, 5);
    
    // Country name
    fill(0);
    noStroke();
    text(pin.name, labelX + 10, labelY + 15);
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
