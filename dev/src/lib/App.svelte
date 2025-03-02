<style>
  .ml3 {
    font-weight: 900;
  }
</style>

<script>
  import Navbar from './Navbar.svelte';
  import anime from 'animejs/lib/anime.es.js';
  import { onMount } from 'svelte';

  onMount(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml3');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({loop: false})
        .add({
          targets: '.ml3 .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInBounce",
          duration: 2500,
          delay: (el, i) => 500 * i
        });
    }
  });
</script>

<Navbar />

<main id="home" class="flex flex-col items-center justify-center min-h-full pt-12 px-12 py-12">
  <div class="flex flex-wrap items-center  border border-2 rounded-3xl px-5">
    <div class="flex flex-col items-start py-6 min-w-8xl min-w-80">
      <!-- <p class="text-xl px-5 pb-2">Hi there, </p> -->
      <!-- <p class="text-2xl px-5">I'm&nbsp;Mohammed</p> -->
      <p class="text-3xl font-bold px-5">Mohammed Mowla</p>
      <p class="text-xl font-bold px-5">Computer Scientist @ LS Technologies</p>
      <p class="text-lg font-bold px-5">Software Developer</p>
      
      <!-- <h1 class="text-4xl sm:text-6xl py-5 px-5 ml3"></h1> -->
      <p class=" text-lg px-5 pt-3 min-w-20 max-w-3xl">
        I earned my Bachelors of Science in Computer Science in Spring of 2024 and am currently working for the FAA as a contractor through LS Technologies. In my free time I like to make fun projects such as Gnomy, a doodle jump like iOS game
      </p>
    </div>
    
  </div>
  
  
</main>

<!-- <div class="flex justify-center break-all">
  Snake anyone?
</div>
<div class="flex justify-center">
  <button class="border rounded-full bg-green-800 py-1 px-2">Yes?</button>
  <button class="border rounded-full bg-green-800 py-1 px-2">No?</button>
</div> -->

