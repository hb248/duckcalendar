import type { PageLoad } from './$types';
import { AnimalApi } from '$lib/api';
import type { DuckApi } from '$lib/types';

// load-Funktion
export const load: PageLoad = async ({ params }) => {

	// id/day aus der URL holen
	const day = params.day;

	if (!day || isNaN(Number(day))) {
		throw new Error('Invalid day');
	}

	// Nur bei Tag 24 wirds Bärenstark ;)
	const res = day === '24' ? await AnimalApi.getBear(800, 450) : await AnimalApi.getSpecificDuck(Number(day));

	// Daten für die Komponente zurückgeben
	return { url: res, day: day } as DuckApi;
};
