<script>
	import WindowCard from "$lib/components/windowCard.svelte";
    import { instructions } from "$lib/text/instructions";
</script>
<h1 class="text-4xl font-bold text-white text-center mx-auto p-8 mb-4 bg-teal-500">Instant Price Builder</h1>
<h2 class="text-xl text-center p-4">{ instructions.en }</h2>
<div class="grid-flow-col p-3">
    <div class="columns-3">
        <WindowCard />
        <WindowCard />
    </div>
</div>
