//----------------------imports----------------------
import { getContext } from '../_engine'
//--------------------Variables----------------------
let ctx = getContext()
//---------------------------------------------------

//all function to draw rect
//Might take a OOP approach to draw shapes
//but for now enjoy the functions

export function rect(positionX, positionY, width, height, options)
{
    /**rect draw a rectangle using the context provided by _engine.js
     * positionX: position on X-axis
     * positionY: position on Y-axis
     * width: width of the shape
     * height: height of the shape
     * options: OBJECT might change alot, and the behavior should be stored somewhere
     *          for future changes and to less edit of the code 
     */
    ctx.fillStyle = "red"
    ctx.fillRect(positionX, positionY, width, height)
}