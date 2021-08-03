canvas = new fabric.Canvas('myCanvas');
bW = 45;
bH = 45;
Px = 10;
Py = 10;
pO = "";
BiO = "";

function player_up() {
    fabric.Image.fromURL("https://lh5.googleusercontent.com/C-nK92jM7_2kqdY4ofrVtw44fnT1yLXFQQzPm9KcTtu3aRCYY8LEzPNAZwDPtD90LFn3TJdQa_UHQSNcnpLd=w1366-h625-rw", function (Img) {
        pO = Img;
        pO.scaleToWidth(105);
        pO.scaleToHeight(100);
        pO.set({
            top: Py,
            left: Px
        });
        canvas.add(pO);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        BiO = Img;
        BiO.scaleToWidth(bW);
        BiO.scaleToHeight(bH);
        BiO.set({
            top: Py,
            left: Px

        });
        canvas.add(BiO);
    });
}
window.addEventListener("keydown", my_KD);

function my_KD(e) {
    KeyP = e.keyCode;
    console.log(KeyP);
    if (e.shiftKey == true && KeyP == '80') {
        console.log("P + Shift");
        bW = bW + 10;
        bH = bH + 10;
        document.getElementById("cW").innerHTML = bW;
        document.getElementById("cH").innerHTML = bH;
    }
    if (e.shiftKey == true && KeyP == '77') {
        console.log("M + Shift");
        bW = bW - 10;
        bH = bH - 10;
        document.getElementById("cW").innerHTML = bW;
        document.getElementById("cH").innerHTML = bH;
    }
    if (KeyP == '70') {
        new_image('hulk_face.png');
        console.log("f");
    }
    if (KeyP == '66') {
        new_image("ironman_body.png");
        console.log("b");
    }
    if (KeyP == '76') {
        new_image("spiderman_legs.png");
        console.log("l");
    }
    if (KeyP == '82') {
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if (KeyP == '72') {
        new_image("ironman_left_hand.png");
        console.log("lh");
    }
}