import {buildUrl} from '../utils/urls';

export const BASE_URL = 'https://api.spotify.com/v1';

export async function search(query) {
    const url = buildUrl(`${BASE_URL}/search`, {
        q: query,
        type: 'track',
        limit: 10,
    });

    const response = await fetch(url);
    const data = await response.json();
    return data
}
