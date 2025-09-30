<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme';
	import { translations } from '$lib/lang';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import LangSwitch from '$lib/components/LangSwitch.svelte';

	let currentLanguage: string;
	let currentTheme: string;

	// Browser-sichere Initialisierung
	onMount(() => {
		theme.subscribe(($theme) => {
			currentTheme = $theme;
		});
	});


</script>

<svelte:head>
	<!-- Dinge in den Head-Bereich adden -->
	<link rel="stylesheet" href="/themes/global.css" />
	<link rel="stylesheet" href={`/themes/${currentTheme || 'light'}.css`} />
</svelte:head>

<!-- Layout-Struktur -->

<header>
	<div class="langsBox">
		<LangSwitch />
	</div>
	<div class="titleBox">
		<h1>{$translations.header}</h1>
	</div>


</header>

<main>
	<slot />
</main>

<footer>
	<div class="asdf">
		<p>{$translations.design}</p>
		<ThemeSwitch />
	</div>

</footer>


<style>
    header {
        height: 15vh;
    }

    main {
        height: 75vh;
    }

    footer {
        height: 10vh;
    }

		/* Tags werden ab hier mit Absicht nochmals verwendet >:( */

    footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    /* Allercoolster Super Duper Footer */
    .asdf {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: -1.4rem;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .langsBox {
        display: flex;
        justify-content: flex-end;
        margin: 0.5rem;
    }

    .titleBox {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 1.5rem;
    }

</style>
