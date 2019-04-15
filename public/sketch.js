let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51)
    socket = io.connect('https://drawing-vaxosv.herokuapp.com');
    socket.on("mouse", (data) => {

        console.log(data);
        noStroke();
        fill(96, 52, 186)
        ellipse(data.x, data.y, 10, 10)
    })
}

function mouseDragged() {
    data = {
        x: mouseX,
        y: mouseY
    }
    noStroke();
    fill(255)
    socket.emit('mouse', data)
    ellipse(mouseX, mouseY, 10, 10)
}

function draw() {
    
}