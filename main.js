function preload() {

}
function setup() {
    Canvas = createCanvas(650 , 480);
    Canvas.position(110 , 250);
    Video = createCapture(VIDEO);
    Video.hide();
    Tint_color = "";    
}
function draw() {
    image(Video, 175 , 100, 300 , 250);
    tint(Tint_color);
    circle(45, 50, 75);
    circle(45, 430, 75);
    circle(600, 430, 75);
    circle(600, 50, 75);
    rect(12.5, 89, 70, 302.5);
    rect(565, 89, 70, 302.5);
    ellipse(175, 100, 55, 55);
    ellipse(475, 100, 55, 55); 
    ellipse(175, 350, 55, 55);
    ellipse(475, 350, 55, 55);    
}
function take_snapshot() {
    save('my_image.png');
}
function filterTint() {
    Tint_color = document.getElementById('colorname').value;
}