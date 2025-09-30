import { writable } from 'svelte/store';

const defaultTheme = 'light'; // Standard-Theme

let storedTheme: string = defaultTheme; // erstma standard
if (typeof window !== 'undefined') {
	storedTheme = localStorage.getItem('theme') || defaultTheme; //wenn was da is, wird das genommen
}

// Mit writable wieder speichern und aktualisieren lassen
export const theme = writable(storedTheme || defaultTheme); // Jetzt NEU mit Fallback!!!!

theme.subscribe((value) => console.log('Aktuelles Theme:', value));


// Funktion zum Umschalten des Themes
export function toggleTheme() {
	theme.update((current) => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', newTheme);
		return newTheme;
	});
}

// Theme ausm localStorage holen
if (typeof window === 'undefined') {
	theme.set(defaultTheme);
} else {
	const storedTheme = localStorage.getItem('theme') || defaultTheme;
	theme.set(storedTheme);
}


// Themes are stored in the balls

