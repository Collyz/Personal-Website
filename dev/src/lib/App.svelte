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

<main class="flex flex-col items-center justify-center min-h-full pt-12">

  <div class="flex flex-col items-center justify-center min-h-full pt-12 border rounded-lg">
    <p class="text-center text-lg px-16 pt-3">test</p>
  </div>
  <p class="text-2xl">Hello there,</p>
  <h1 class="text-4xl sm:text-6xl py-5  ml3">I'm&nbsp;Mohammed</h1>
  <p class="text-center text-lg px-16 pt-3">
    I earned my Bachelors of Science in Computer Science in spring of 2024 and am currently working for the FAA as a contractor through LS Technologies
  </p>
</main>

<!-- <div class="flex justify-center break-all">
  Snake anyone?
</div>
<div class="flex justify-center">
  <button class="border rounded-full bg-green-800 py-1 px-2">Yes?</button>
  <button class="border rounded-full bg-green-800 py-1 px-2">No?</button>
</div> -->

