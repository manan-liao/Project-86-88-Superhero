var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function block_update(block_Img){
    fabric.Image.fromURL(block_Img, function (Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("blockWidth").innerHTML = block_width;
        document.getElementById("blockHeight").innerHTML = block_height;
    }
    
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shiftkey pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("blockWidth").innerHTML = block_width;
        document.getElementById("blockHeight").innerHTML = block_height;
    }

    if(keyPressed == "38"){
        console.log("up");
    }
    if(keyPressed == "40"){
        console.log("down");
    }
    if(keyPressed == "37"){
        console.log("left");
    }
    if(keyPressed == "39"){
        console.log("right");
    }

    if(keyPressed == "70"){
        console.log("f");
        block_update("hulk_face.png");
    }
    if(keyPressed == "66"){
        console.log("b");
        block_update("hulkd_body.png")
    }
    if(keyPressed == "76"){
        console.log("l");
        block_update("hulk_legs.png");
    }
    if(keyPressed == "72"){
        console.log("h");
        block_update("hulk_left_hand.png");
    }
    if(keyPressed == "82"){
        console.log("r");
        block_update("hulk_right_hand.png");
    }
}