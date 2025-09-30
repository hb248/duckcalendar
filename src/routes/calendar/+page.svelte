<script>
	import Door from '$lib/components/Door.svelte';
	const days = Array.from({ length: 24 }, (_, i) => i + 1);
	import { translations } from '$lib/lang';


</script>

<div class="calFlBox">
	<p>{$translations.calFlavour}</p>
</div>

<div class="calBox">
<div class="calendar">
	{#each days as day}
		<Door {day} />
	{/each}
</div>
</div>

<style>
		.calBox {
				display: flex;
				justify-content: center;
				align-items: center;
        padding-top: 1rem;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
        width: 90vw;
    }

    .calFlBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        padding-top: 1rem;
    }

</style>
