<script>
    import { onMount } from 'svelte';
    const pages = {
        'index.html'   : ['home'    , 'home-s'],
        'projects.html': ['proj', 'proj-s'],
        'contact.html' : ['cont' , 'cont-s'],
        'resume.html'  : ['res'  , 'res-s']
    }
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        let id2 = document.getElementById(pages[page][1]);
        if(id2 != null){
            id2.style.textDecoration = 'underline';
            id2.style.textUnderlineOffset = '8px'
            console.log('yeah')
        }
    }
    // Underline current page
    let path = window.location.pathname;
    let page = path.split("/").pop();
    onMount(() =>{
        let id1 = document.getElementById(pages[page][0]);
        // let id2 = document.getElementById(pages[page][1]);
        if(id1 != null){
            id1.style.textDecoration = 'underline';
            id1.style.textUnderlineOffset = '8px'
        }
    });
    
</script>

<nav class="flex p-4">
    <div class="justify-start">
        <a id="home" class="hover:opacity-55 text-lg" href="./index.html">Mohammed Mowla</a>
    </div>
    <div class="flex-1 hidden md:flex justify-end">
        <!-- <a class="px-3 text-lg hover:opacity-55" href="./experience.html">Experience</a> -->
        <a id="proj" class="px-3 text-lg hover:opacity-55" href="./projects.html">Projects</a>
        <a id="cont" class="px-3 text-lg hover:opacity-55" href="./contact.html">Contact</a>
        <a id="res" class="px-3 text-lg hover:opacity-55" href="./resume.html">Resume</a>
        
    </div>
    <div class="flex-1 md:hidden flex pr-6 justify-end">
        <button on:click={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
    </div>
</nav>

{#if isMenuOpen}
<div class="flex-1 md:hidden bg-green-950 justify-end">
    <!-- <a class="block px-3 py-2 text-lg hover:opacity-55" href="./experience.html">Experience</a> -->
    <a id='proj-s' class="block px-3 py-2 text-lg hover:opacity-55" href="./projects.html">Projects</a>
    <a id='cont-s' class="block px-3 py-2 text-lg hover:opacity-55" href="./contact.html">Contact</a>
    <a id='res-s' class="block px-3 py-2 text-lg hover:opacity-55" href="./resume.html">Resume</a>
</div>
{/if}



