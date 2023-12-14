<script lang="ts">
	import WindowForm from "$lib/components/windowForm.svelte";
    import { instructions } from "$lib/text/instructions";
    import { browser } from "$app/environment";
    import type { PageData } from "./$types";
	import { applyAction, deserialize, enhance } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

    export let data: PageData;

    $: ({ windows } = data);

    let totalPrice = 0;
    $: {
        totalPrice = windows.reduce((sum: number, window: any) => sum + ((Number(window.width)/12) * (Number(window.height)/12) * Number(window.inserttype)), 0);
    }

    let formDirtyStates = windows ? windows.map(() => false) : [];

    async function handleSubmit(event: Event, index: number) {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const windowId = formData.get('id'); 

    const response = await fetch(`?/updateWindowEstimate&id=${windowId}`, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        await invalidateAll();
        formDirtyStates[index] = false;
    }

    applyAction(deserialize(await response.text()));
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

<h2 class="text-xl font-bold text-center">Your Window Inserts: Click values to edit</h2>
<!-- {#if message}
    <div class="text-center font-bold font-italic text-indow-yellow">
    {message}
    </div>
{/if} -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {#each windows as window, index }
        <div class="mx-auto mt-2 mb-4 w-full rounded-xl outline text-center">
            <div class="shadow-xl p-4">
                <form class="w-full"  method="POST" on:submit|preventDefault={(event) => handleSubmit(event, index)} on:input={() => formDirtyStates[index] = true}>
                    <input type="hidden" name="id" value={window.id} />
                    <label for="window">Window Name:</label>
                    <input class="rounded-sm p-2 m-2 font-bold text-lg text-indow" type="text" name="window" id="window" value={window.window}>
                    <br>
                    <label for="inserttype">Insert Type:</label>
                    <select class="outline rounded-sm p-2 m-2" name="inserttype" id="inserttype" bind:value={window.inserttype}>
                        <option value={31}>Standard Grade</option>
                        <option value={40}>Performance Grade</option>
                        <option value={44}>Commercial Grade</option>
                    </select>
                    <br>
                    <label for="width">Width:</label>
                    <input class="outline w-1/6 rounded-sm p-2 m-2" type="text" name="width" id="width" bind:value={window.width}>
                    <hr>
                    <label for="height">Height:</label>
                    <input class="outline w-1/6 rounded-sm p-2 m-2" type="text" name="height" id="height" bind:value={window.height}>
                    <hr>
                    {#if formDirtyStates[index]}
                        <button class="p-2 m-2 text-white rounded-md outline bg-indow-yellow" type="submit">Save Edits</button>
                    {/if}
                </form>
                <form class="p-2 mt-6" action="?/deleteWindowEstimate&id={window.id}" method="POST" use:enhance>
                    <button type="submit" class="p-2 rounded-md outline hover:bg-red hover:text-white">Delete Window</button>
                </form>
                <h4 class="font-thin p-2">Price: ${((Number(window.width)/12) * (Number(window.height)/12) * Number(window.inserttype)).toFixed(2)}</h4>
                </div>
            </div>
        {/each}
    </div>
{/if}
