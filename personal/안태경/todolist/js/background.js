const images = [...Array(10)].map((item, index) => `${index + 1}.jpg`);
const currentImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./images/${currentImage}`;
document.body.appendChild(bgImage);
