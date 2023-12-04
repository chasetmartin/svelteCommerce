<script>
	import WindowForm from "$lib/components/windowForm.svelte";
    import { instructions } from "$lib/text/instructions";
</script>
<h1 class="text-4xl font-bold text-white text-center mx-auto p-8 mb-4 bg-teal-500">Instant Price Builder</h1>
<h2 class="text-xl text-center p-4">{ instructions.en }</h2>
<div class="grid-cols-3 p-3">
    <div class="p-4">
        <WindowForm />
    </div>
</div>
