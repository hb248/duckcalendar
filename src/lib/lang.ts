import { writable, derived } from 'svelte/store';
import type { Translations, TranslationsMap } from '$lib/types';
import de from '$lib/languages/de.json';
import en from '$lib/languages/en.json';


// alle verfügbaren Sprachen
const allTranslations: TranslationsMap = { de, en }; // krasse array dinge mit typen

// Standardwert für die Sprache (wenn keine Sprache in `localStorage` gespeichert ist)
const defaultLanguage = 'en';

// Der Store für die aktuelle Sprache
export const language = writable(defaultLanguage); // writable macht speichern und so und das man das ändern kann. Was meinst du copilot?: writable ist ein store, der einen Wert speichert und ihn bei Bedarf aktualisiert. Der Wert kann von anderen Komponenten gelesen und abonniert werden.

//Der derived Store für die übersetzungen
export const translations = derived(language, ($language) => { //derived muss seinen wert ändern wenn sich der wert von language ändert
	return allTranslations[$language] || allTranslations['en']; // wenn die sprache nicht da ist wird en genommen.
});

language.subscribe((value) => console.log('Aktuelle Sprache:', value));
//translations.subscribe((value) => console.log('Aktuelle Übersetzungen:', value));

// Sprache in den LocalStorage ballern
export function setLanguage(lang: string) {
	if (typeof window !== 'undefined') { // Window gibts nur im Browser, also nix Server. Das musste da rein weil sonst gabs nen Fehler.
		localStorage.setItem('language', lang);
	}
	language.set(lang);
}

// und zum schluss kucken wir in den LocalStorage
if (typeof window !== 'undefined') {
	const storedLanguage = localStorage.getItem('language') || defaultLanguage; // wenn nix da, fallback
	setLanguage(storedLanguage);
}
