<script>
	import { onMount } from 'svelte';

	export let day;
	let isPastDay = false;

	// Türchen formatieren nach Tag & Monat
	// Die extra billige Sperre findet sich in der +page.svelte von [day]
	onMount(() => {
		const currentDate = new Date();
		const currentDay = currentDate.getDate();
		// const currentMonth = currentDate.getMonth();

		// if (currentMonth === 11) {
		isPastDay = day <= currentDay;
		// } else {
		// 	isPastDay = false;
		// }

		// console.log('isPastDay:', isPastDay);
		// console.log('day:', day);
	});
</script>

<!-- Behold, die einzige Verwendung der class: Direktive -->
<a href={`/calendar/${day}`} class="door" class:past-day={isPastDay}>
	<span>{day}</span>
</a>

<style>
    .door {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8rem;
        font-weight: bold;
        text-decoration: none;
        border-radius: 5px;
    }

    .past-day {
        border-inline: 0.2rem dotted;
        /*border-color: #ffcb6b;*/
        /*box-shadow: 0.2rem 0.2rem #ffcb6b;*/
				/*Die zwei dinger sind jetzt in den light/dark stylesheets*/
    }

</style>
