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
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 1:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 2:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 3:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 4:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
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
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 7:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 8:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 9:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 10:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 11:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 12:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 13:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
      ];
      break;
    case 14:
      pinCoordinates = [
        {x: 100, y: 150},
        {x: 200, y: 250},
        {x: 300, y: 350},
        {x: 400, y: 450},
        {x: 500, y: 550}
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
