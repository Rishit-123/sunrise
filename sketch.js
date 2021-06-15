const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg)


    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
   
        var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
        var responseJson = await response.json()
        var dateTime = responseJson.datetime
        console.log(dateTime)
        var hour = dateTime.slice(11,13)
        console.log(hour)
        if (hour>=04&&hour<=06){
        bg = 'sunrise1.png'
        }
        else{
      
bg = 'sunset11.png'

        }
        backgroundImg = loadImage(bg)
        
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
