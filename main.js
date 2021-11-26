//create reference to the canvas using fabric library.
var canvas=new fabric.Canvas("myCanvas");
 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(510);
    //set block_image_object top anf left to 0 each.
block_image_object.set({
	top:0,
left:0
});
    
	canvas.add(block_image_object);
	});
	
}

function playSound(){
	x.play();
}
