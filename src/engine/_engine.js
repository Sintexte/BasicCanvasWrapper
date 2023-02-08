//--------------------Variables--------------------
//update Option in case of changes for less confusion
//classesNames are used if changed please update (only the one used are here)
export var OPTIONS = {
    debug: true,
    canvasName: "canvas2d",
    classesNames: {
        canvasLoop: "CanvasLoop"
    }
}
export var CANVASOPTIONS = {
    size: { width: window.innerWidth, height: window.innerHeight }
}
export var CanvasLoopClasses = []
//--------------------------------------------------


//--------------------Functions--------------------
function createCanvas()
{
    //create canvas
    const canvas = document.createElement("canvas")
    canvas.id = OPTIONS.canvasName
    canvas.width = CANVASOPTIONS.size.width
    canvas.height = CANVASOPTIONS.size.height

    document.body.append(canvas)
}
function canvasTimer()
{
    //used for "gameLoop" or "canvasLoop"
    //using the CanvasLoop Class implementing update and start
}
function addCanvasClass(canvasloopClass)
{
    //add a canvasloop class or a class that inherited canvasloop to run on the timer
    //TODO: add check before
    //silent error handler, maybe need a change
    if (canvasloopClass.constructor.name == OPTIONS.classesNames.canvasLoop)
    {
        CanvasLoopClasses.push(canvasloopClass)
    } else if (OPTIONS.debug)
    {
        console.log("Couldnt Add CanvasLoopClass: Class passes didn't inherite from the baseClass " + OPTION.classesNames.canvasLoop);
    }
}
//--------------------------------------------------


//--------------------engineStart--------------------
createCanvas()
//--------------------------------------------------
