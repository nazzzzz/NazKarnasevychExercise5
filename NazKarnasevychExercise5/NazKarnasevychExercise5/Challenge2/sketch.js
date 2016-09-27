//Naz Karnasevych

function setup() {

    //large canvas for scaling the monsters
    createCanvas(4000, 2000);
    background(255);
}

//defining some globals
var lastX, lastY;
var myScale;

var joannaX, joannaY, joannaScale;
counter = 0;

function draw() {

    background(255);
    // monster 1 colors
    torso = color(25, 255, 45);
    limbs = color(0, 203, 255);

    head = color(255, 123, 0);
    ears = color(0);
    mouth = color(255, 50, 15);
    teeth = color(255);
    eyes = color(0);

    // monster 2 colors
    torso_2 = color(25, 2, 92);
    limbs_2 = color(24, 103, 75);

    head_2 = color(112, 111, 46);
    ears_2 = color(34, 35, 115);
    mouth_2 = color(255, 50, 15);
    teeth_2 = color(255);
    eyes_2 = color(0);

    //Joanna variables

    joannaBody = color(209, 113, 117);
    joannaShell = color(41, 20, 3);
    joannaEyes = color(127, 4, 222);

    joannaBody_2 = color(134, 180, 0);
    joannaShell_2 = color(31, 78, 45);
    joannaEyes_2 = color(100, 44, 105);

    //Sawyer variables
    eyesSawyerP = color(120, 145, 20);
    mohawkSawyerP = color(43, 200, 34);
    teethSawyerP = color(132, 10, 213);
    shoeSawyerP = color(34, 70, 100);

    eyesSawyerP_2 = color(43, 12, 200);
    mohawkSawyerP_2 = color(123, 20, 34);
    teethSawyerP_2 = color(32, 100, 113);
    shoeSawyerP_2 = color(134, 50, 10);

    eyesSawyerP_3 = color(120, 15, 200);
    mohawkSawyerP_3 = color(43, 20, 134);
    teethSawyerP_3 = color(13, 100, 135);
    shoeSawyerP_3 = color(134, 75, 200);

    push();
    moveX = 10;


    // Sawyer monster 1
    //if up arrow is pressed, it hops up
    if(keyIsDown(UP_ARROW)){
    	moveX-=50;	
    	println(moveX);
    }
    monsterSawyer(0.5, 0, 0, eyesSawyerP, mohawkSawyerP, teethSawyerP, shoeSawyerP, moveX);
    pop();

    //Sawyer monster 2
    //if z is pressed, the mohawk flashes colors
    push();
    if(keyIsDown(90)){
    	mohawkSawyerP_2 = color((random(255), random(255), random(255)));
    }
    monsterSawyer(0.7, 300, 100, eyesSawyerP_2, mohawkSawyerP_2, teethSawyerP_2, shoeSawyerP_2);
    pop();

    //Sawyer Monster 3
    
    push();
    monsterSawyer(0.25, 800, 350, eyesSawyerP_3, mohawkSawyerP_3, teethSawyerP_3, shoeSawyerP_3);
    pop();
    
    //my monster (blue edition)
    push();
    //if mouse is pressed, the monster disappears.
    if (!mouseIsPressed) {
        monster(torso_2, limbs_2, head_2, ears_2, mouth_2, teeth_2, eyes_2, 2.5, 300, 200);
    }

    pop();

    //Joanna monster no1
    push();
    //if W is pressed, the scaling is set to random
    if (keyIsDown(87)) {
        //counter explained below
        if (counter % 30 == 0) {
            joannaScale = random(0.1, 2);
        }
    }
    monster2(joannaBody, joannaShell, joannaEyes, joannaScale, 50, 50);
    pop();

    //Joanna monster 2
    push();
    //if mouse is pressed, the color is randomized for the body and the shell
    if (mouseIsPressed) {
        joannaBody_2 = color(random(0, 255), random(0, 255), random(0, 255));
        joannaShell_2 = color(random(0, 255), random(0, 255), random(0, 255));

    }

    //setting parameters to test translate and scaling
    joannaX = 500;
    joannaY = 200;
    joannaScale_2 = 1;
    monster2(joannaBody_2, joannaShell_2, joannaEyes_2, joannaScale_2, joannaX, joannaY);
    pop();

    //set parameters for the movement of my monster
    translatoX = 0;
    translatoY = 0;
    myScale = 0.5;

    //instance 1
    //if mouse is pressed, translates the monster based on the position of the head
    if (mouseIsPressed) {
        translatoX = (mouseX - 200 * myScale) / myScale;
        translatoY = (mouseY - 100 * myScale) / myScale;

        //keeps track of the last position so that the monster doesnt reset
        lastX = translatoX;
        lastY = translatoY;
    }


    monster(torso, limbs, head, ears, mouth, teeth, eyes, myScale, lastX, lastY);

    //counter for the draw function. If the draw function runs a 1000 times, the counter resets to 0 to avoid oveflow. This counter is used so that the scale function gets called every 30 times that the draw function is called.
    counter = counter % 1000;
    counter++;






}

function monster(torsoP, limbsP, headP, earsP, mouthP, teethP, eyesP, newSizeP, newXP, newYP) {

    noStroke();
    //draw the head
    drawHead(headP, earsP, mouthP, teethP, eyesP, newSizeP, newXP, newYP);

    //draw the body
    drawBody(torsoP, limbsP, newSizeP, newXP, newYP);
}

function drawHead(headP, earsP, mouthP, teethP, eyesP, newSizeP, newXP, newYP) {
    //scale it to the wanted size
    scale(newSizeP);

    //move it over if wanted
    translate(newXP, newYP);

    //drawing the components

    //head
    fill(head);
    ellipse(200, 100, 100, 100);

    //ears
    fill(earsP);
    triangle(165, 65, 165, 20, 185, 52);
    triangle(235, 65, 235, 20, 215, 52);

    //mouth
    fill(mouthP);
    quad(175, 135, 180, 105, 220, 90, 230, 120);

    //teeth
    fill(teethP);
    triangle(180, 105, 182, 120, 185, 103);
    triangle(190, 101, 194, 118, 195, 99);
    triangle(200, 97, 206, 114, 208, 94);
    triangle(212, 93, 214, 112, 220, 90);

    //eye slits
    fill(eyesP);
    triangle(165, 75, 190, 85, 180, 85);
    triangle(225, 75, 200, 85, 210, 85);

}

function drawBody(torsoP, limbsP, newSizeP, newXP, newYP) {



    //upper body
    fill(torsoP);
    rect(185, 148, 30, 60);

    //leg
    fill(limbsP);
    rect(195, 208, 10, 40);

    //foot
    triangle(195, 245, 205, 245, 200, 260);
    triangle(195, 245, 197, 252, 185, 260);
    triangle(205, 245, 203, 252, 215, 260);

    //arms
    quad(140, 150, 185, 155, 185, 160, 125, 165);
    quad(260, 150, 215, 155, 215, 160, 275, 165);

    //scale(1);
}



//JOANNA MONSTER!!!!!!!!!!!!!!!!!!
// monster
function monster2(body, shell, eyes, herScale, herX, herY) {

    scale(herScale);
    translate(herX, herY);


    stroke(0);
    // legs
    fill(body);
    quad(100, 575, 125, 454, 160, 478, 170, 575); // left
    quad(220, 575, 235, 478, 275, 454, 290, 575); // right
    // body
    fill(shell);
    ellipse(200, 360, 220, 250); // shell
    // abdomen
    fill(body);
    ellipse(200, 360, 150, 180);
    noFill();
    arc(200, 300, 109, 20, 0, PI);
    arc(200, 330, 139, 20, 0, PI);
    arc(200, 360, 147, 20, 0, PI);
    arc(200, 390, 139, 20, 0, PI);
    arc(200, 420, 109, 20, 0, PI);
    fill(body);
    ellipse(200, 200, 140, 170); // head
    noStroke();
    fill(157, 67, 67);
    ellipse(194, 208, 8, 8);
    ellipse(205, 208, 8, 8);
    fill(122, 67, 67);
    rect(160, 162, 34, 3); // left eyebrow
    rect(205, 162, 34, 3); // right eyebrow
    fill(255);
    ellipse(180, 180, 30, 20); // left eye
    ellipse(220, 180, 30, 20); // right eye
    fill(eyes);
    ellipse(180, 183, 20, 20); // left eye
    ellipse(220, 183, 20, 20); // right eye
    ellipseMode(CENTER); // left pupil
    fill(0);
    ellipse(180, 183, 12, 12);
    ellipseMode(CENTER); // right pupil
    fill(0);
    ellipse(220, 183, 12, 12);
    fill(73, 20, 3);
    stroke(100, 0, 0);
    arc(200, 225, 90, 80, 0, PI); // mouth
    // teeth
    fill(225);
    triangle(165, 225, 170, 265, 175, 225); // left fang
    triangle(180, 225, 190, 245, 200, 225);
    triangle(200, 225, 210, 245, 220, 225);
    triangle(225, 225, 230, 265, 235, 225); // right fang
    // antena
    fill(180, 182, 184);
    line(160, 128, 120, 70); // left
    triangle(110, 80, 107, 49, 130, 60);
    line(235, 128, 285, 70); // right
    triangle(275, 65, 300, 58, 296, 85);
    // arms
    fill(body);
    rotate(radians(-20));
    ellipse(130, 465, 60, 150); // right
    rotate(radians(50));
    ellipse(295, 280, 60, 150); // left

}


function monsterSawyer(scaleSawyer, newXSawyer, newYSawyer, eyesSawyer, mohawkSawyer, teethSawyer, shoeSawyer, moveXP) {
	translate(newXSawyer, newYSawyer);
	scale(scaleSawyer);
    drawMohawkSawyer(mohawkSawyer, moveXP);
    drawHeadSawyer(eyesSawyer, teethSawyer);
    drawNeckSawyer();
    drawBodySawyer();
    drawLegsSawyer(shoeSawyer);
}

// THIRD PERSON!!!!!!!!!!!!!

function drawMohawkSawyer(newMohawk, newMohawkX) { // This is a mowhawk
    x = 25.0;
    y = 2.5;
    translate(0, newMohawkX);
    strokeWeight(5);
    stroke(newMohawk);
    line(300, 100, 500, 80);
    line(300, 100, 300 - x, 170);
    line(300 + x, 100 - y, 300, 170 - y);
    line(300 + 2 * x, 100 - 2 * y, 300 + x, 170 - 2 * y);
    line(300 + 3 * x, 100 - 3 * y, 300 + 2 * x, 170 - 3 * y);
    line(300 + 4 * x, 100 - 4 * y, 300 + 3 * x, 170 - 4 * y);
    line(300 + 5 * x, 100 - 5 * y, 300 + 4 * x, 170 - 5 * y);
    line(300 + 6 * x, 100 - 6 * y, 300 + 5 * x, 170 - 6 * y);
    line(300 + 7 * x, 100 - 7 * y, 300 + 6 * x, 170 - 7 * y);
    line(300 + 8 * x, 100 - 8 * y, 300 + 7 * x, 170 - 8 * y);
    stroke(0);
    strokeWeight(1);
    translate(0, 0);
}

function drawHeadSawyer(newEyes, newTeeth) { //This is the head
    noFill();
    line(100, 187.5, 475, 150);
    line(150, 287.5, 375, 250);
    bezier(100, 187.5, 275, 180, 200, 287.5, 150, 287.5);
    bezier(475, 150, 350, 200, 350, 200, 375, 250);

    fill(newEyes);//should be eye
    ellipse(256, 196, 30, 30);
    fill(0);
    ellipse(256, 196, 10, 10);
    fill(0);
    ellipse(256, 196, 1, 1);
    noFill();

    fill(newTeeth);//teeth
    quad(100, 187.5, 103, 204, 112, 207, 111, 187);
    quad(111, 187, 112, 199, 116, 199, 119, 187);
    quad(119, 187, 115, 204, 124, 205, 126, 189);
    quad(126, 185, 127, 199, 132, 193, 136, 191);
    quad(135, 189, 140, 207, 147, 200, 145, 187);
    quad(145, 187, 148, 198, 156, 200, 155, 192);
    quad(137, 272, 150, 288, 159, 287, 153, 273);
    quad(155, 279, 159, 287, 168, 285, 165, 275);
    quad(169, 263, 168, 285, 181, 278, 173, 258);
    quad(176, 268, 181, 278, 191, 270, 187, 256);
    noFill();

}


function drawNeckSawyer() { //this is neck
    fill(random(255), random(255), random(255));
    quad(315, 259, 221, 323, 470, 291, 374, 250);
    noFill();
}

function drawBodySawyer() { //this is body
    noFill();
    fill(random(255), random(255), random(255));
    bezier(221, 323, 153, 385, 89, 460, 62, 538);
    bezier(62, 538, 186, 575, 340, 512, 444, 489);
    bezier(470, 291, 516, 355, 501, 432, 444, 489);
    ///this is the "wing" part
    bezier(221, 323, 50, 750, 520, 432, 470, 291);
    noFill();
}

function drawLegsSawyer(newShoes) { ///this is legs
    fill(random(255), random(255), random(255));
    stroke(0);
    rect(136, 551, 22, 70);
    quad(307, 527, 307, 597, 329, 597, 329, 520);
    fill(newShoes);
    arc(146, 656, 90, 70, PI, TWO_PI, PIE);
    arc(319, 632, 90, 70, PI, TWO_PI, PIE);


}
