<script lang="ts">
	import type { DuckApi } from '$lib/types';
	export let data: DuckApi; // Daten aus der load-Funktion// Daten aus der load-Funktion
	import { goto } from '$app/navigation';
	import { translations } from '$lib/lang';
</script>

<div>

	<!-- Begrüßungsnachricht -->
	<div class="greetingsBox">
		<!--	<h1>{$translations.greeting}</h1>-->
		<p>{$translations.welcome}</p>
	</div>

	<!-- Entenbild anzeigen -->
	{#if data.url}
		<div class="center">
			<img src="{data.url}" alt="{$translations.imageAlt}" />
		</div>
	{:else}
		<p>{$translations.imageError}</p>
	{/if}

	<!-- Button zum Kalender -->
	<div class="center">
		<br>
		<button on:click={() => goto('/calendar')}>{$translations.toCalendar}</button>
	</div>


</div>

<style>
    .center {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
    }

    img {
        width: auto;
        height: 40vh;
    }


    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .greetingsBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        padding-top: 1rem;
    }

</style>
