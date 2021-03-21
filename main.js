canvas = new fabric.Canvas('myCanvas');
bW = 30;
bH = 30;
Px = 10;
Py = 10;
pO = "";
BiO = "";
function player_up(){
    fabric.Image.fromURL("https://lh5.googleusercontent.com/C-nK92jM7_2kqdY4ofrVtw44fnT1yLXFQQzPm9KcTtu3aRCYY8LEzPNAZwDPtD90LFn3TJdQa_UHQSNcnpLd=w1366-h625-rw",function(Img){
        pO = Img;
        pO.scaleToWidth(105);
        pO.scaleToHeight(100);
        pO.set({
            top:Py, left:Px
        }); 
        canvas.add(pO);
     });
} 
function newImg(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        BiO = Img;
        BiO.scaleToWidth(bW);
        BiO.scaleToHeight(bH);
        BiO.set({
            top:Py, 
            left:Px

    }) ;
    canvas.add(BiO);
});
}
 