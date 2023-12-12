<script lang="ts">
	import { goto } from "$app/navigation";

	import type { PageData } from "./$types";
   

    export let data: PageData;

    $: ({ window } = data)

    async function handleSubmit(event: Event) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const response = await fetch('?/updateWindowEstimate', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            sessionStorage.setItem('message', 'Window updated successfully');
            goto('/');
        } else {
            // handle error
        }
    }

</script>
<h1 class="text-4xl font-bold text-white text-center mx-auto p-16 mb-4 bg-indow">Update Window</h1>
<h2 class="text-xl text-center p-4">You're editing: {window.window}</h2>
<div class="grid-cols-3 p-3">
    <div class="p-4">
        <div class="mx-auto w-3/5 rounded-xl outline text-center">
            <div class="shadow-xl p-4">
                <h3 class="text-xl font-semibold">{window.window}</h3>
                <form class="w-full" on:submit={handleSubmit}>
                    <label for="inserttype">Insert Type</label>
                    <select class="outline rounded-sm p-2 m-2" name="inserttype" id="inserttype" value={window.inserttype.toString()}>
                        <option value="31">Standard Grade</option>
                        <option value="40">Performance Grade</option>
                        <option value="44">Commercial Grade</option>
                    </select>
                    <br>
                    <label for="window">Window Name</label>
                    <input class="outline rounded-sm p-2 m-2" type="text" name="window" id="window" value={window.window}>
                    <br>
                    <label for="width">Window width</label>
                    <input class="outline rounded-sm p-2 m-2" type="text" name="width" id="width" value={window.width}>
                    <br>
                    <label for="height">Window height</label>
                    <input class="outline rounded-sm p-2 m-2" type="text" name="height" id="height" value={window.height}>
                    <br>
                    <button class="p-2 text-white rounded-md outline bg-indow-yellow hover:bg-teal-300" type="submit">UPDATE WINDOW</button>
                </form>
            </div>
        </div>
    </div>
</div>