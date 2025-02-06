
<script>
    import P5 from 'p5-svelte';
    import { onMount } from 'svelte';
    export let title = "empty";
    export let text = "empty";
    export let link = "#";
    let centerX = 0;
    let centerY = 20;
    let eyeX = 0;
    let eyeY = 0;
    let eyeOffset = 10;
    let pellets = [];
    let resizeWidth = 150;
    let right = true;
    let left = false;

    onMount(() =>{
        resizeWidth = document.getElementById('p5-div').clientWidth - 42;
    });

    class Pellet{
        constructor(p5, x, y){
            this.p5 = p5;
            this.x = x;
            this.y = y;
            this.colorR = Math.floor(Math.random() * 256);
            this.colorG = Math.floor(Math.random() * 256);
            this.colorB = Math.floor(Math.random() * 256);
        }

        display(){
            this.p5.noStroke('orange');
            this.p5.fill(this.colorR, this.colorG, this.colorB);
            this.p5.circle(this.x, this.y, 10);
        }

        hide(){
            this.colorR = 182;
            this.colorG = 207;
            this.colorB = 182;
        }
    }

    const sketch = (p5) => {

      p5.setup = () => {

          p5.createCanvas(resizeWidth, 160);
          p5.noStroke();
          reset();
      };

      p5.draw = () => {

          p5.background('#B6CFB6');

          for(let i = 0; i < pellets.length; i++){
            pellets[i].display();
            if(pellets[i].x == eyeX && pellets[i].y == centerY){
                pellets[i].hide();
            }
            if(pellets[i].x == p5.width - eyeX && pellets[i].y == centerY + 40){
              pellets[i].hide();
            }
          }

          centerY += centerX == p5.width + 40 ? 80 : 0;
          centerX = centerX > p5.width + 40 ? -40 : centerX + 1;
          eyeX = centerX - 5;
          eyeY = centerY - eyeOffset;

          // Update start and stop angles.
          let biteSize = p5.PI / 16;
          let startAngle = biteSize * p5.sin(p5.frameCount * 0.1) + biteSize;
          let endAngle = p5.TWO_PI - startAngle;

          let tempBitSize = p5.PI / 16;
          let oscillation = tempBitSize * p5.sin(p5.frameCount * 0.1) + tempBitSize;
          let startAng = (14/16) * p5.PI + oscillation;
          let endAng = (18/16) * p5.PI - oscillation;
          
          p5.fill(255, 192, 203)
          p5.stroke(255, 0, 255);
          p5.arc(p5.width - centerX, centerY + 40, 40, 40, endAng, startAng,);
          p5.noStroke();
          p5.fill(0, 0, 0);
          p5.ellipse(p5.width - eyeX, eyeY + 40, 7, 7);
          // Outline the pacman
          p5.fill(255, 255, 0);
          p5.stroke('orange');
          p5.arc(centerX, centerY, 40, 40, startAngle, endAngle, p5.PIE);
          // Don't outline the eye on pacman
          p5.noStroke();
          p5.fill(0, 0, 0);
          p5.ellipse(eyeX, eyeY, 7, 7);

          if(centerY > p5.height){
            reset();
          }
      };

      p5.windowResized = () =>{
          let resizeWidth = document.getElementById('p5-div').clientWidth - 42;
          // let resizeHeight = document.getElementById('p5-div').clientHeight;
          p5.noLoop();
          p5.resizeCanvas(resizeWidth, 160, true);
          p5.clear();
          reset();
          p5.loop();
      };

      function reset(){
        centerX = 0;
        centerY = 20;
        pellets = [];
        // Insert the pellets into pellet array, dynamically! based on canvas size (35 chosen through trial and error)
        for(let i = 0; i < Math.floor(p5.width / 35); i++){
            pellets.push(new Pellet(p5, 50 + (i * 30), 20));
        }
        for(let i = 0; i < Math.floor(p5.width / 35); i++){
            pellets.push(new Pellet(p5, 50 + (i * 30), 60));
        }
        for(let i = 0; i < Math.floor(p5.width / 35); i++){
            pellets.push(new Pellet(p5, 50 + (i * 30), 100));
        }
        for(let i = 0; i < Math.floor(p5.width / 35); i++){
            pellets.push(new Pellet(p5, 50 + (i * 30), 140));
        }
      }
  };
</script>

<div class="text-center text-wrap">
    {#if link === "#"}
    <h1 class="text-2xl underline pb-5">{title}</h1> 
    {:else}
    <h1 class="text-xl underline pb-5"><a class="hover:opacity-55" href="{link}">{title}
        <svg xmlns="http://www.w3.org/2000/svg" class='w-5 h-5 inline-block' viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd">
            <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g>
        </svg>
        </a>
        </h1>
    {/if}
    
    <div class="border border-custom-green-border rounded-lg text-center text-wrap p-2">
        <div id='p5-div'class="border border-custom-green-border rounded-lg text-center min-h-[350px] p-5">
              <div class="border border-custom-green-border mt-1">
                <P5 {sketch} />
              </div>
            <p class="pt-5">{@html text}</p>
        </div>
        
    </div>
</div>
