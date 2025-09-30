// API Client

import type { DuckApi, SingleApiResult, AllApiResult } from './types';

export class AnimalApi {
	// Platzhalter-Bär-Bild
	static async getBear(width: number, height: number): Promise<string> {
		const res = await fetch(`https://placebear.com/${width}/${height}`);
		return res.url;
	}

	// Platzhalter-Hunde-Bild
	static async getDog(width: number, height: number): Promise<string> {
		const res = await fetch(`https://place.dog/${width}/${height}`);
		return res.url;
	}

	// Zufälliges Enten-Bild
	static async getDuck(): Promise<string> {
		const res = await fetch('https://random-d.uk/api/v2/random');
		const duck: DuckApi = await res.json();
		return duck.url; // Die URL des Bildes aus der API
	}

	// Spezifisches Enten-Bild (mit ID)
	static async getSpecificDuck(id: number): Promise<string> {
		return `https://random-d.uk/api/v2/${id}.jpg`;
	}
}
