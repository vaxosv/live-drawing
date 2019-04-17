let socket;
let data = {
    p1: {x: 1},
    p2: {x: 1}
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    // socket = io.connect('https://drawing-vaxosv.herokuapp.com');
    socket = io.connect();
    socket.on("mouse", (data) => {

        noStroke();
        fill(96, 52, 186);
        ellipse(data.p1.x, data.y, 10, 10)
    });

    socket.on("arrow", (getData) => {
        background(51);
        fill("#4257a7");
        data.p2.x = getData.p1.x
        console.log(data);
        ellipse(data.p2.x, 100, 100, 100);
        fill("#8924a7");
        ellipse(data.p1.x, 100, 100, 100);
    })
}

function mouseDragged() {
    data = {
        x: mouseX,
        y: mouseY
    };
    noStroke();
    fill(255)
    socket.emit('mouse', data);
    ellipse(mouseX, mouseY, 10, 10)
}
let x = 0;

$(document).keypress(function (e) {
    if (e.which === 97) {
        data.p1.x -= 10;
        arrow(x);
    }else if(e.which === 100){
        data.p1.x += 10;
        arrow(x);
    }
});

function arrow(x) {
    background(51);
    fill("#8924a7");
    ellipse(data.p1.x, 100, 100, 100);
    fill("#4257a7");
    ellipse(data.p2.x, 100, 100, 100);

    socket.emit('arrow', data);

}

function draw() {

}