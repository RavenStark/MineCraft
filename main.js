canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object = "";
block_image_object = "";

function player_update() {

    fabric.Image.fromURL("player.png" , function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top: player_y, 
left: player_x

});
canvas.add(player_object);
    }) ;


}

function new_image(get_image) 
{
fabric.Image.fromURL(get_image , function(Img){

    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top: player_y,
        left: player_x
    });
canvas.add(block_image_object);


});







}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {

keyPressed = e.keyCode;
console.log(keyPressed);
if (e.shiftKey == true && keyPressed == '80' ) {
console.log("Shift And P Pressed Together");
block_image_height = block_image_height + 10; 
block_image_width = block_image_width + 10;
document.getElementById("current_height").innerHTML = block_image_height;
document.getElementById("current_width").innerHTML = block_image_width;

}

if (e.shiftKey == true && keyPressed == '77' ) {
    console.log("Shift And M Pressed Together");
    block_image_height = block_image_height - 10; 
    block_image_width = block_image_width - 10;
    document.getElementById("current_height").innerHTML = block_image_height;
    document.getElementById("current_width").innerHTML = block_image_width;
    
    }


 if (keyPressed == '40') {
down();
    console.log("DOWN");
    }

 if (keyPressed == '37') {
        left();
        console.log("LEFT");
    }

if (keyPressed == '39') {
            right();
            console.log("RIGHT");
 }

 if (keyPressed == '38') {
                up();
                console.log("UP");
 }


 if(keyPressed == '87') 
 {
new_image('wall.jpg');
console.log("W is Pressed");
} 

 if (keyPressed == '71' ) {
    new_image('ground.png');
    console.log("G is Pressed");
    
    
     } 

     if (keyPressed == '76' ) {
        new_image('light_green.png');
        console.log("L is Pressed");
        
        
         } 
         if (keyPressed == '84' ) {
            new_image('trunk.jpg');
            console.log("T is Pressed");
            
            
             } 

             if (keyPressed == '68' ) {
                new_image('dark_green.png');
                console.log("D is Pressed");
                
                
                 } 
                 if (keyPressed == '89' ) {
                    new_image('yellow_wall.png');
                    console.log("Y is Pressed");
                    
                    
                     } 
                     if (keyPressed == '85' ) {
                        new_image('unique.png');
                        console.log("U is Pressed");
                        
                        
                         } 
                         if (keyPressed == '67' ) {
                            new_image('cloud.jpg');
                            console.log("C is Pressed");
                            
                            
                             } 


                             if (keyPressed == '82' ) {
                                new_image('roof.jpg');
                                console.log("R is Pressed");
                                
                                
                                 } 


}

                                                                               

function up() 
{
if (player_y >= 0) 
{
player_y = player_y - block_image_height;
console.log("Block Image Height =" + block_image_height);
console.log("When Up arrow key is pressed, X= " + player_x + ",Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}


function down() {
    if (player_y <= 500)
{
player_y = player_y + block_image_height;
console.log("Block Image Height =" + block_image_height );
console.log("When Down arrow key is pressed, X =" + player_x + ",Y =" + player_y);
canvas.remove(player_object);
player_update();
}
}

function left() {

    if (player_x >= 0) 
    {
     player_x = player_x - block_image_width;
     console.log("Block Image Width=" + block_image_width);
     console.log("When left arrow key is pressed, X =" + player_x + ",Y =" + player_y);
     canvas.remove(player_object);
     player_update();
    }
}

function right() {
    if (player_x <= 850) 
    {
 player_x = player_x + block_image_width;
 console.log("Block Image Width=" + block_image_width);
 console.log("When right arrow key is pressed, X =" + player_x + ",Y = " + player_y);
 canvas.remove(player_object);
 player_update();
}
}
