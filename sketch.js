let img;

function preload() {
  img = loadImage('assets/FiveCountries.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  // Calculate the scale factor
  let imgAspect = img.width / img.height;
  let canvasAspect = width / height;
    
  let imgWidth, imgHeight;
    
  // Maintain the aspect ratio
  if (imgAspect > canvasAspect) {
    imgWidth = width;
    imgHeight = width / imgAspect;
  } else {
    imgHeight = height;
    imgWidth = height * imgAspect;
  }
    
  // Center the image on the canvas
  let x = (width - imgWidth) / 2;
  let y = (height - imgHeight) / 2;
  
  // Draw the image, adjusted to fit the canvas without distortion
  image(img, x, y, imgWidth, imgHeight);
}
