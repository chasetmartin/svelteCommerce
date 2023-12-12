<script lang="ts">
	import WindowForm from "$lib/components/windowForm.svelte";
    import { instructions } from "$lib/text/instructions";

    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ windows } = data);

    let totalPrice = 0;
    $: {
        totalPrice = windows.reduce((sum: number, window: any) => sum + Number(window.price), 0);
    }

    let message = sessionStorage.getItem('message');
    if (message) {
        setTimeout(() => {
            sessionStorage.removeItem('message');
            message = null;
        }, 5000);
    }

</script>
<h1 class="text-4xl font-bold text-white text-center mx-auto p-16 mb-4 bg-indow">Instant Estimate Calculator</h1>
<h2 class="text-xl text-center p-4">{ instructions.en }</h2>
<div class="grid-cols-3 p-3">
    <div class="p-4">
        <WindowForm />
    </div>
</div>

{#if windows.length > 0}
    <div class="mx-auto mt-2 mb-4 text-center">
        <div class="">
            <h2 class="text-xl underline">Total Estimate Price</h2>
            <h3 class="text-lg font-bold">$ {totalPrice.toFixed(2)}</h3>
        </div>
    </div>

<h2 class="text-xl font-bold text-center">Your Window Inserts</h2>
{#if message}
    <div class="text-center font-bold font-italic text-indow-yellow">
    {message}
    </div>
{/if}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {#each windows as window }
        <div class="mx-auto mt-2 mb-4 w-full rounded-xl outline text-center">
            <div class="shadow-xl p-4">
                    <h3 class="text-lg">Window Name: <strong>{window.window}</strong></h3>
                    <h4>Insert Grade: 
                        {#if window.inserttype == 31}
                            Standard Grade
                        {:else if window.inserttype == 40}
                            Performance Grade
                        {:else if window.inserttype == 44}
                            Commercial Grade
                        {/if}
                    </h4>
                    <h4>Price: ${Number(window.price).toFixed(2)}</h4>
                    <p>Width: {window.width} inches</p>
                    <p class="mb-3">Height: {window.height} inches</p>
                    <div>
                        <form class="p-2" action="?/deleteWindowEstimate&id={window.id}" method="POST">
                            <a href="/{window.id}" class="p-2 rounded-md outline hover:bg-indow-yellow hover:text-white">Edit</a>
                        </form>
                        <form class="p-2" action="?/deleteWindowEstimate&id={window.id}" method="POST">
                            <button type="submit" class="p-2 rounded-md outline hover:bg-indow-yellow hover:text-white">Delete Window</button>
                        </form>
                    </div>
            </div>
        </div>
        {/each}
    </div>
{/if}
