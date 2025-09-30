import type { PageLoad } from '../../.svelte-kit/types/src/routes/calendar/[day]/$types';
import { AnimalApi } from '$lib/api';
import type { DuckApi } from '$lib/types';

export const load: PageLoad = async () => {

	const res = await AnimalApi.getDuck(); //denke await wäre hier nicht nötig

	return { url: res } as DuckApi;
};