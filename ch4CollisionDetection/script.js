const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const collisionText = document.getElementById('collisionText');
const circle1 = {
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius:60,
    color:'green'
};

const circle2= {
    x: canvas.width/2,
    y:canvas.height/2,
    radius:60,
    color:'green'
};

canvas.addEventListener('mousemove',function(event){
    circle2.x = event.clientX-canvas.getBoundingClientRect().left;
    circle2.y = event.clientY-canvas.getBoundingClientRect().top;

})

function detectCollision(){
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx*dx+ dy*dy);
    return distance<circle1.radius+circle2.radius;
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Draw circle 1
    ctx.beginPath();
    ctx.arc(circle1.x,circle1.y,circle1.radius,0,Math.PI*2);
    ctx.fillStyle = circle1.color;
    ctx.fill();
    ctx.closePath();

    //Draw circle 2
    ctx.beginPath();
    ctx.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2);
    ctx.fillStyle = circle2.color;
    ctx.fill();
    ctx.closePath();

    //check for collision
    const isColliding = detectCollision();
    collisionText.innerText= isColliding?'true':'false';

    //change the color base on collision
    circle1.color= isColliding?'red':'green';
    circle2.color= isColliding?'red':'green';
    requestAnimationFrame(draw);

}
draw()