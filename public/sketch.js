let socket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51)
    socket = io.connect('http://127.0.0.1:3001');
    socket.on("mouse", (data) => {

        console.log(data);
        noStroke();
        fill(96, 52, 186)
        ellipse(data.x, data.y, 30, 30)
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
    ellipse(mouseX, mouseY, 30, 30)
}

function draw() {
    
}