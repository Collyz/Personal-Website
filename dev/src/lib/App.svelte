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

<main class="flex flex-col items-center justify-center min-h-full pt-32">
  <p class="text-2xl pt-16">Hello there,</p>
  <h1 class="text-4xl sm:text-6xl py-5  ml3">I'm&nbsp;Mohammed</h1>
  <!-- <svg class="absolute min-w-full min-h-full">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yelllow"></circle>
  </svg> -->
  <p class="text-center text-lg px-16 pt-3">
    I'm a recent graduate from Stockton University with a Bachelor of Science of Computer Science currently interning at the FAA where I perform automation testing.
  </p>
</main>

<!-- <div class="flex justify-center break-all">
  Snake anyone?
</div>
<div class="flex justify-center">
  <button class="border rounded-full bg-green-800 py-1 px-2">Yes?</button>
  <button class="border rounded-full bg-green-800 py-1 px-2">No?</button>
</div> -->

