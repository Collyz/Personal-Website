<script>
    export let title = "empty";
    export let text = "empty";
    export let link = "#";
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
        <div class="border border-custom-green-border rounded-lg text-center min-h-[350px] p-5">
            <p>{@html text}</p>
        </div>
        
    </div>
</div>
