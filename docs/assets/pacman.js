let centerX = 0;
let centerY = 20;
let eyeX = 0;
let eyeY = 0;
let eyeOffset = 10;
let wordsArr = [];
function setup() {
    let myCanvas = createCanvas(280, 160);
    myCanvas.parent('canvasContainer');
    noStroke();
    wordsArr.push(new TextWrapper("triangles rule", 50, 20));
    wordsArr.push(new TextWrapper("yummy pizza", 50, 60));
    wordsArr.push(new TextWrapper("tessellations", 50, 100));
    wordsArr.push(new TextWrapper("where pellets?", 50, 140));
    
}

function draw() {
    background(220);
    for(let i = 0; i < wordsArr.length; i++){
        wordsArr[i].display(9);
        for(let j = 0; j < wordsArr[i].idxs.length; j++){
            if(wordsArr[i].idxs[j][0] == eyeX && centerY == wordsArr[i].idxs[j][1]){
                wordsArr[i].makeBlank(j);
                wordsArr[i].idxs[j] = [-100, -100];
                break;
            }
        }
    }
    centerY += centerX == width + 40 ? 40 : 0;
    centerX = centerX > width + 40 ? -40 : centerX + 1;
    //centerY = centerY > height ? 0 : centerY + 1;
    eyeX = centerX - 5;
    eyeY = centerY - eyeOffset;

    // Update start and stop angles.
    let biteSize = PI / 16;
    let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
    let endAngle = TWO_PI - startAngle;
    fill(255, 255, 0);
    arc(centerX, centerY, 40, 40, startAngle, endAngle, PIE);

    fill(0, 0, 0);
    ellipse(eyeX, eyeY, 7, 7);

    if(centerY > height){
        centerX = 0;
        centerY = 20;
        wordsArr = [];
        wordsArr.push(new TextWrapper("triangles rule", 50, 20));
        wordsArr.push(new TextWrapper("yummy pizza", 50, 60));
        wordsArr.push(new TextWrapper("tessellations", 50, 100));
        wordsArr.push(new TextWrapper("where pellets?", 50, 140));
    }
    
}

class TextWrapper{
    constructor(val, x, y){
        this.text = Array.from(val);
        this.idxs = [];
        this.startX = x;
        this.startY = y;
        this.offset = 0;
        this.origLength = this.text.length;
    }

    display(offset){
        this.offset = offset; 
        let changingX = this.startX;
        for(let i = 0; i < this.text.length; i++){
            text(this.text[i], changingX, this.startY);
            this.idxs.push([changingX, this.startY]);
            changingX += i + this.offset;
        }
        
    }

    removeLast(){
        console.log("called")
        this.text.pop();
    }

    makeBlank(idx){
        noLoop();
        this.idxs[idx] = [-100, -100];
        this.text[idx] = " ";
        loop();
    }


}