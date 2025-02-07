let img1, img2;
let pinCoordinates = [];
let source;

function preload() {
  img1 = loadImage('assets/FiveCountries.png');
  img2 = loadImage('assets/pin.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  dropdown = select('#country-select');
  dropdown.changed(handleDropdownChange);
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
        {x: 1270, y: 435},
        {x: 1360, y: 370},
        {x: 500, y: 352},
        {x: 1420, y: 572},
        {x: 1224, y: 392}
      ];
      source = "Source: World Bank. https://data.worldbank.org/indicator/SP.POP.TOTL?most_recent_value_desc=true";
      break;
    case 1:
      pinCoordinates = [
        {x: 978, y: 323},
        {x: 270, y: 615},
        {x: 1637, y: 573},
        {x: 699, y: 794},
        {x: 640, y: 460}
      ];
      source = "Source: World Population Review. https://worldpopulationreview.com/country-rankings/smallest-countries";
      break;
    case 2:
      pinCoordinates = [
        {x: 1422, y: 421},
        {x: 953, y: 315},
        {x: 1390, y: 528},
        {x: 1428, y: 418},
        {x: 903, y: 349}
      ];
      source = "Source: Our World in Data. https://ourworldindata.org/most-densely-populated-countries";
      break;
    case 3:
      pinCoordinates = [
        {x: 805, y: 198},
        {x: 699, y: 794},
        {x: 863, y: 410},
        {x: 1335, y: 300},
        {x: 995, y: 650}
      ];
      source = "Source: Global Citzen Soultions. https://www.globalcitizensolutions.com/countries-with-lowest-population-density/";
      break;
    case 4:
      pinCoordinates = [
        {x: 500, y: 352},
        {x: 1360, y: 370},
        {x: 1505, y: 355},
        {x: 970, y: 285},
        {x: 922, y: 272}
      ];
      source = "Source: Wikipedia. https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      break;
    case 5:
      pinCoordinates = [
        {x: 952, y: 537},
        {x: 673, y: 509},
        {x: 1050, y: 681},
        {x: 853, y: 472},
        {x: 1108, y: 478}
      ];
      source = "Source: Wikipedia. https://en.wikipedia.org/wiki/List_of_countries_by_total_wealth#cite_note-databook2023-2";
      break;
    case 6:
      pinCoordinates = [
        {x: 950, y: 283},
        {x: 1390, y: 528},
        {x: 1422, y: 421},
        {x: 898, y: 268},
        {x: 1174, y: 402}
      ];
      source = "Source: World Bank. https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      break;
    case 7:
      pinCoordinates = [
        {x: 1053, y: 556},
        {x: 1053, y: 506},
        {x: 1016, y: 502},
        {x: 1125, y: 520},
        {x: 1023, y: 556}
      ];
      source = "Source: World Bank. https://data.worldbank.org/indicator/NY.GDP.PCAP.PP.CD?most_recent_value_desc=true";
      break;
    case 8:
      pinCoordinates = [
        {x: 995, y: 288},
        {x: 986, y: 303},
        {x: 1032, y: 265},
        {x: 1040, y: 275},
        {x: 1040, y: 299}
      ];
      source = "Source: https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      break;
    case 9:
      pinCoordinates = [
        {x: 1023, y: 690},
        {x: 995, y: 650},
        {x: 580, y: 520},
        {x: 1065, y: 668},
        {x: 1024, y: 650}
      ];
      source = "Source: https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false";
      break;
    case 10:
      pinCoordinates = [
        {x: 1575, y: 571},
        {x: 1420, y: 572},
        {x: 950, y: 500},
        {x: 1270, y: 435},
        {x: 500, y: 352}
      ];
      source = "Source: We Forum. https://www.weforum.org/stories/2021/03/these-are-the-top-ten-countries-for-linguistic-diversity/";
      break;
    case 11:
      pinCoordinates = [
        {x: 1322, y: 417},
        {x: 1270, y: 435},
        {x: 1301, y: 392},
        {x: 1167, y: 408},
        {x: 1224, y: 392}
      ];
      source = "Source: Wikipedia (UChicago AQLI 2022). https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      break;
    case 12:
      pinCoordinates = [
        {x: 345, y: 545},
        {x: 1610, y: 511},
        {x: 1625, y: 507},
        {x: 805, y: 198},
        {x: 335, y: 659}
      ];
      source = "Source: Wikipedia (UChicago AQLI 2022). https://en.wikipedia.org/wiki/List_of_countries_by_air_pollution";
      break;
    // Add more cases for other options
    default:
      pinCoordinates = [];
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
    image(img2, pin.x, pin.y, 14.3, 30);
  }
}

// This is just a helper function
function mousePressed() {
  console.log(`{x: ${mouseX}, y: ${mouseY}},`);
}