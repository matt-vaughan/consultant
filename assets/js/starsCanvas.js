const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
//canvas.width = 600;
//canvas.height = 600;

const background = new Image();
background.src = "./images/background.png";

const midground = new Image();
midground.src = "./images/midground.png";

var background_y = 0;
var midground_y  = 0;

function draw() {
    ctx.drawImage(background, 0, background_y, 600, 600, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(midground, 0, midground_y, 600, 600, 0, 0, canvas.width, canvas.height);

    background_y += 1;
    if ( background_y >= 600 ) {
        background_y = 0;
    }

    midground_y += 2;
    if ( midground_y >= 600 ) {
        midground_y = 0;
    }

    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);