import * as universal from '../entries/pages/categories/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/categories/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/categories/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.679602d5.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/ShopCard.17aa6a62.js"];
export const stylesheets = [];
export const fonts = [];
