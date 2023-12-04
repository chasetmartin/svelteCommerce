<script>

</script>

<div class="mx-auto w-3/5 rounded-xl outline text-center">
    <div class="shadow-xl p-4">
        <h3 class="text-xl font-semibold">Add a window to your estimate:</h3>
        <form class="w-full" action="?/createWindowEstimate" method="POST">
            <label for="inserttype">Insert Type</label>
            <select class="outline rounded-sm p-2 m-2" name="inserttype" id="inserttype">
                <option value="31">Standard Grade</option>
                <option value="40">Performance Grade</option>
                <option value="44">Commercial Grade</option>
            </select>
            <br>
            <label for="window">Window Name</label>
            <input class="outline rounded-sm p-2 m-2" type="text" name="window" id="window" placeholder="i.e north kitchen">
            <br>
            <label for="width">Window width</label>
            <input class="outline rounded-sm p-2 m-2" type="text" name="width" id="width" placeholder="Width">
            <br>
            <label for="height">Window height</label>
            <input class="outline rounded-sm p-2 m-2" type="text" name="height" id="height" placeholder="Height">
            <br>
            <button class="p-2 text-white rounded-md outline bg-indow-yellow hover:bg-teal-300" type="submit">SAVE TO ESTIMATE</button>
        </form>
    </div>
</div>