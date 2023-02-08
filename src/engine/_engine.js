export var OPTIONS = {
    canvasName: "canvas2d",
}

export var CANVASOPTIONS = {
    size: { width: window.innerWidth, height: window.innerHeight }
}

export var CanvasLoopClasses = []

function createCanvas()
{
    //create canvas
    const canvas = document.createElement("canvas")
    canvas.id = OPTIONS.canvasName
    canvas.width = CANVASOPTIONS.size.width
    canvas.height = CANVASOPTIONS.size.height

    document.body.append(canvas)
}

//used for "gameLoop" or "canvasLoop"
//using the CanvasLoop Class implementing update and start
function canvasTimer()
{

}

function addCanvasClass(canvasloopClass)
{
    //add a canvasloop class or a class that inherited canvasloop to run on the timer
    //TODO: add check before

    CanvasLoopClasses.push(canvasloopClass)
}
createCanvas()
