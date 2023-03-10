//----------------------imports----------------------
import CanvasLoop from "./classes/canvasLoop"
//--------------------Variables--------------------
//update Option in case of changes for less confusion
//classesNames are used if changed please update (only the one used are here)
export var OPTIONS = {
    debug: true,
    classesNames: {
        canvasLoop: "CanvasLoop"
    },
    framerPerSecond: 1    //0 no limit ?
}
export var CANVASOPTIONS = {
    id: "canvas2d",
    context: {
        type: "2d"
    },
    size: { width: window.innerWidth, height: window.innerHeight }
}
//used to store CanvasLoopClasses to make every canvasloop work
export var CanvasLoopClasses = []
var context
let loopTimer
//--------------------------------------------------


//--------------------Functions--------------------
function createCanvas()
{
    //create canvas
    const canvas = document.createElement("canvas")
    canvas.id = CANVASOPTIONS.id
    canvas.width = CANVASOPTIONS.size.width
    canvas.height = CANVASOPTIONS.size.height

    document.body.append(canvas)
}
function canvasTimer()
{
    //used for "gameLoop" or "canvasLoop"
    //using the CanvasLoop Class implementing update and start
    loopTimer = setInterval(() =>
    {
        CanvasLoopClasses.map((canvasloop) =>
        {
            canvasloop.update()
        })
    }, 1000 / OPTIONS.framerPerSecond)
}
function createContext()
{
    let canvas = document.getElementById(CANVASOPTIONS.id)
    context = canvas.getContext(CANVASOPTIONS.context.type)
    context.fillStyle = "black"
    context.fillRect(0, 0, CANVASOPTIONS.size.width, CANVASOPTIONS.size.height)
}
export function addCanvasClass(canvasloopClass)
{
    //add a canvasloop class or a class that inherited canvasloop to run on the timer also known as gameloop/canvasloop
    //DONE TODO: add check before
    //DONE TODO: silent error handler, maybe need a change
    if (canvasloopClass.constructor.name == OPTIONS.classesNames.canvasLoop)
    {
        CanvasLoopClasses.push(canvasloopClass)
    } else if (OPTIONS.debug)
    {
        console.log("Couldnt Add CanvasLoopClass: Class passes didn't inherite from the baseClass " + OPTION.classesNames.canvasLoop);
    }
}
export function getContext()
{
    return context
}
//--------------------------------------------------


//--------------------engineStart--------------------
createCanvas()
createContext()
canvasTimer()
addCanvasClass(new CanvasLoop())
//--------------------------------------------------
