const body = document.querySelector("body");
const IMG_NUMBER = 8;

function paintImg(imgNum) {
    const image = new Image();
    image.src = `images/img_${imgNum + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
}

function genRandom() {
    const num = Math.floor(Math.random() * 5)
    return num;
    
}

function init() {
    const randomNum = genRandom();
    paintImg(randomNum);
}
init();