<script lang="ts">
	import type { DuckApi } from '$lib/types';
	export let data: DuckApi; // Daten aus der load-Funktion
	import { translations } from '$lib/lang';

	// console.log('translations:', translations);
	console.log('day:', data.day);
	// console.log('data:', data);

	// Crazy Zurück-Weiterleitung, wenn Tag noch nicht erreicht wurde!
	import { goto } from '$app/navigation';

	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	// const currentMonth = currentDate.getMonth();

	// if (currentMonth !== 11 || parseInt(data.day) > currentDay) {
	if (data.day && parseInt(data.day) > currentDay) { // das && isn billiger fix weil irgendwas "undefined" bla bla. who cares, javascript hätts mir durchgehen lassen.
		goto('/calendar');
	}
</script>


<div class="tuerchenBox">
	<h1>{$translations.tuerchen} {data.day}</h1>
</div>

<div class="center">
	{#if data.url}
		<img src="{data.url}" alt="{$translations.imageAlt}" />
	{:else}
		<p>{$translations.imageError}</p>
	{/if}
</div>




<p><a href="/calendar">{$translations.back}</a> </p>

<style>
    h1 {
        text-align: center;
    }
    img {
        display: block;
        width: auto;
        height: 40vh;
        margin: 20px auto;
        border: 5px solid;
        border-radius: 10px;
				border-color: unset;
    }
    p {
        text-align: center;
    }
    a {
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        display: block;
        margin-top: 20px;
    }
    a:hover {
        text-decoration: underline;
    }

		.tuerchenBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        padding-top: 1rem;
    }

    .center {
        display: flex;
        justify-content: center;
        /*padding-top: 1rem;*/
    }
</style>
