<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
	import { translations } from '$lib/lang';

	let currentTheme: string;

	// Abonniere (& Like) den Theme-Store
	$: currentTheme = $theme;

</script>

<button on:click={toggleTheme}>
	{currentTheme === 'light' ? $translations.darkmode : $translations.lightmode}
</button>

<style>
    button {
        padding: 0.2rem 0.5rem;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
    }

</style>
