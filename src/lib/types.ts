//Typdefinitionen für die API

export interface DuckApi {
	message?: string; // ? = optional
	url: string;
	day?: string;
}

export interface AllApiResult {
	data: DuckApi[];
}

export interface SingleApiResult {
	data: DuckApi;
}


// Typdefinitionen für Übersetzungen
export type Translations = { [key: string]: string };

export interface TranslationsMap {
	[key: string]: Translations;
}