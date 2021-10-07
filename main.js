canvas = new 
fabric.Canvas('my canvas');
player_y=10;
playe_x=10;
player_object="";
block_image_object="";
block_image_width=30;
block_image_hieght=30;
vat="ironman-face.png"
function player_update()
{
	fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", 
    function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            top:player_x,
        });
        canvas.add(player_object)

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_hieght);
        block_image_object.set({
            top:player_y,
            top:player_x,
        });
    });
}
if(keyPressed == '70')
	{
		new_image('ironman-face.png'); 
		console.log("f");
	}