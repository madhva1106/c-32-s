const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)

    backgroundImg(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var request = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var response = await request.json();

    var hour = response.datetime.slice(11,14);

    console.log(hour);

    if(hour>=4 && hour<=6){
        backgroundImg = loadImage("sunrise1.png")
    }
    else if(hour>=6 && hour<=8){
        backgroundImg = loadImage("sunrise2.png")
    }
    else if(hour>=8 && hour<=10){
        backgroundImg = loadImage("sunrise3.png")
    }
    else if(hour>=10 && hour<=12){
        backgroundImg = loadImage("sunrise4.png")
    }
    else if(hour>=12 && hour<=14){
        backgroundImg = loadImage("sunrise5.png")
    }
    else if(hour>=14 && hour<=16){
        backgroundImg = loadImage("sunrise6.png")
    }
    else if(hour>=16 && hour<=18){
        backgroundImg = loadImage("sunrise7.png")
    }
    else if(hour>=18 && hour<=19){
        backgroundImg = loadImage("sunrise8.png")
    }
    else if(hour>=19 && hour<=20){
        backgroundImg = loadImage("sunrise9.png")
    }
    else if(hour>=19 && hour<=21){
        backgroundImg = loadImage("sunrise10.png")
    }
    else if(hour>=20 && hour<=22){
        backgroundImg = loadImage("sunrise11.png")
    }
    else if(hour>=22 && hour<=24){
        backgroundImg = loadImage("sunrise12.png")
    }


       
    

}
