canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
var mouse_event= "empty";
var last_position_of_y,last_position_of_x;
colour = "green";
width_of_line = 3;
canvas.addEventListener("mouseUP", my_mouseUP);
function my_mouseUP(e){
    mouse_event= "mouseUP";
}
canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown(e){
    mouse_event= "mousedown";
}
canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e){
    mouse_event= "mouseLeave";
}
canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e){
    var current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y= e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        
        console.log("Last position of x and y coordinates=");
        console.log("x= " + last_position_of_x + "y= " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates=");
        console.log("x= " + current_position_of_mouse_x + "y= " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}