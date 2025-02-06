let img1, img2;
let pinCoordinates = [];

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
      break;
    case 1:
      pinCoordinates = [
        {x: 978, y: 323},
        {x: 1637, y: 540},
        {x: 1677, y: 571},
        {x: 1528, y: 499},
        {x: 981, y: 312}
      ];
      break;
    case 2:
      pinCoordinates = [
        {x: 1422, y: 421},
        {x: 953, y: 315},
        {x: 1390, y: 528},
        {x: 1428, y: 418},
        {x: 903, y: 349}
      ];
      break;
    case 3:
      pinCoordinates = [
        {x: 805, y: 198},
        {x: 700, y: 797},
        {x: 863, y: 410},
        {x: 1335, y: 300},
        {x: 995, y: 650}
      ];
      break;
    case 4:
      pinCoordinates = [
        {x: 500, y: 352},
        {x: 1360, y: 370},
        {x: 1505, y: 355},
        {x: 970, y: 285},
        {x: 922, y: 272}
      ];
      break;
    case 5:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 6:
      pinCoordinates = [
        {x: 950, y: 283},
        {x: 1390, y: 528},
        {x: 1422, y: 421},
        {x: 898, y: 268},
        {x: 1167, y: 408}
      ];
      break;
    case 7:
      pinCoordinates = [
        {x: 1053, y: 556},
        {x: 1053, y: 506},
        {x: 1016, y: 502},
        {x: 1125, y: 520},
        {x: 1023, y: 556}
      ];
      break;
    case 8:
      pinCoordinates = [
        {x: 995, y: 288},
        {x: 986, y: 303},
        {x: 1032, y: 265},
        {x: 1040, y: 275},
        {x: 1040, y: 299}
      ];
      break;
    case 9:
      pinCoordinates = [
        {x: 1023, y: 690},
        {x: 995, y: 650},
        {x: 580, y: 520},
        {x: 1065, y: 668},
        {x: 1024, y: 650}
      ];
      break;
    case 10:
      pinCoordinates = [
        {x: 1575, y: 571},
        {x: 1420, y: 572},
        {x: 950, y: 500},
        {x: 1270, y: 435},
        {x: 500, y: 352}
      ];
      break;
    case 11:
      pinCoordinates = [
        {x: 1322, y: 417},
        {x: 1270, y: 435},
        {x: 1301, y: 392},
        {x: 1167, y: 408},
        {x: 1224, y: 392}
      ];
      break;
    case 12:
      pinCoordinates = [
        {x: 345, y: 545},
        {x: 1610, y: 511},
        {x: 1625, y: 507},
        {x: 805, y: 198},
        {x: 335, y: 659}
      ];
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