<script lang="ts">
	import { language, translations, setLanguage } from '$lib/lang'; // Alle Sprache-Dinger
	import { onMount } from 'svelte';

	let currentLanguage: string; // unsicher ob die noch gebraucht wird, aber who cares

	// Beim Laden der Seite die Sprache aus localStorage laden
	onMount(() => {
		const storedLanguage = localStorage.getItem('language') || 'en';
		setLanguage(storedLanguage); // Setzt die Sprache
		language.subscribe(($language) => {
			currentLanguage = $language; // Setzt die Sprache, wenn sich der Store ändert
		});
	});

	// Sprachwechselfunktion #megaaufwendig
	function changeLanguage(lang: string) {
		setLanguage(lang); // Sprache im Store und localStorage setzen
	}

</script>

<!-- Sprachumschaltung -->
<div class="center">
	<button on:click={() => changeLanguage('de')} class="lang">DE</button>
	<button on:click={() => changeLanguage('en')} class="lang">EN</button>
</div>

<style>
		button {
				padding: 0.2rem 0.5rem;
				border: 1px solid;
				border-radius: 5px;
				cursor: pointer;
		}

    .center {
        display: flex;
        justify-content: center;
        gap: 0.2rem;
    }
</style>