//Capture Mouse movement
document.onmouse = mousemove;
function mouseMove(ev) {
    //firefox window.event set to ignore ev by default
    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
}

//will need to gain the mouse coordinates within our dragNdrops function
// Firefox uses event.pageX && event.pageY to represent the mouse position relative to the document.
//   IE    uses event.pageX && event.pageY to represent mouse position relative to the window.
function mouseCoords(ev) {
    if(ev.pageX || ev.pageY) {
        return {x:ev.pageX, y:ev.pageY}
    }
    return {
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}

/*
~moving our object item~
We'll need to gain the mouse coordinates within our dragNdrops function.
Firefox uses event.pageX && event.pageY to represent the mouse position relative to the document.
  IE    uses event.pageX && event.pageY to represent mouse position relative to the window. */
document.onmousemove = mouseMove;
document.onmouseup = mouseUp;
var dragObject = null;
var mouseOffset = null;
function getMouseOffset(target, ev) {
    ev = ev || window.event;
    var docPos = getPosition(target);
    var mousePos = mouseCoords(ev);
    return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
}
function getPosition(e) {
    var left = 0;
    var top = 0;
    while (e.offsetParent) {
        left += e.offsetLeft;
        top += e.offsetTop;
        e = e.offsetParent;
    }
    left += e.offsetLeft;
    top += e.offsetTop;
    return {x:left, y:offsetTop}
}
function mouseMove (ev) {
    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
    if(dragObject) {
        dragObject.style.position = "absolute";
        dragObject.style.top = mousePos.y - mouseOffset.y;
        dragObject.style.left = mousePos.x - mouseOffset.x;
        return false;
    }
}
function mouseUp() {
    //on mouseup we let go of dragging this dragObject
    dragObject = null;
}
function makeDraggable(item) {
    if(!item) return;
    item.onmousedown = function(ev) {
        dragObject = this;
        mouseOffset = getMouseOffset(this, ev); 
        return false;
    }
}

