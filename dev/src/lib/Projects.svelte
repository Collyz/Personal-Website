<script>
    import Navbar from './Navbar.svelte';
    import Donut from './Donut.svelte';
    import Pacman from './Pacman.svelte';
    import Card from './Card.svelte';
</script>
  
<Navbar />

<p class="flex justify-center tracking-tight text-4xl py-8">
    Projects
</p>

<div id="card-container" class="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 px-4 md:px-24">
    <Donut 
     title = {"Lake Fred Research"}
     text={"Performed a Delaunay Triangulation on Stockton University's Lake Fred utilizing Blender and Python on geospatial data that was collected on the lake. <br> [Research]"}
     link={"https://collyz.github.io/Lake-Fred/"}/>
    <Pacman
    title={"Finite Automata Designer"}
    text={"Applied the p5.js library to create a Finite Automata (FA) designer that allows you to build a FA by hand that takes input strings into the program to be parsed. <br> [Final Project for Theory of Computation]"} 
    link = {"https://collyz.github.io/Theory_Of_Computation_Final_Project/"}/>
    <Card 
    title={"Github"}
    
    text={"Explore my github for the projects that don't have a dedicated website to them.<br><br><p class='text-xl pb-2'>Highlights: </p><hr><ul><li class='py-1'>Inventory Desktop Application [SWE Project]</li><li class='py-1'>Probablity and Statistics Library [Prob Stats Project]</li><li class='py-1'>Syntax Type - A PHP based typeracer [Web App Engineering Project]</li></ul></a>"} 
    link = {"https://github.com/Collyz"}/>
</div>