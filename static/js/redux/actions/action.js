/**
 * Created by jin.huang on 17/1/10.
 */
export const TITLE = 'TITLE';

export function getTitle(text) {
    return { type: TITLE, text }
}