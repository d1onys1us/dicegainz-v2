<script lang="ts">
    import { generateWorkout } from "./lib/generateWorkout";
    import type { Workout } from "./schemas/Workout";
    let todaysWorkout: Workout = null;

    function rollWorkout() {
        todaysWorkout = generateWorkout();
    }
</script>

<div class="container mx-auto">
    <div class="navbar bg-base-100">
        <a href="./" class="btn btn-ghost normal-case text-xl">Dice Gainz</a>
    </div>
    {#if todaysWorkout}
        <p>Today's workout:</p>
        <p>T1: {todaysWorkout.t1.name}</p>
        <p>T2: {todaysWorkout.t2.name}</p>
        <p>T3a: {todaysWorkout.t3a.name}</p>
        <p>T3b: {todaysWorkout.t3b.name}</p>
    {:else}
        <p>Click the button to generate a workout!</p>
    {/if}

    <button class="btn btn-primary">Start</button>
    <button class="btn" on:click={rollWorkout}>Roll</button>
</div>
