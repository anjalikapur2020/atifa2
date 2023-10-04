
var splashScreen,play,next,bgimg
var gameState="wait"

function preload() {
    splashScreen = loadImage("lemon.gif")
    bgimg = loadImage("magicbg4.webp")
  
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    play=createButton("PLAY")
    play.position(200,height-200)
    play.size(100,50)
}

function draw(){

    if(gameState=="wait"){
    background(splashScreen)
}

play.mousePressed(()=>{
    gameState="about"
})


if(gameState=="about"){
popabout()
play.hide()
}


if(gameState=="level1"){
    background(bgimg)
}

}

function popabout(){
    swal({
       title: "This is the Battle of Fruits!!",
       text:"To win!! Lemon has to save itself from attacks from different fruits!!",
       imageUrl:"Limeman.gif",
       imageSize:"200x200",
       confirmButtonText:"START ", 
        confirmButtonColor:"green"
    
    },
    function(){
       gameState="level1"
    })
    
    
    }

