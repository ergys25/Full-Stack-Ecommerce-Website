import * as universal from '../entries/pages/product/_id_/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/product/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/product/[id]/+page.js";
export const imports = ["_app/immutable/nodes/10.d4bdceaa.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/cart.54eca98a.js","_app/immutable/chunks/index.0247fe50.js"];
export const stylesheets = [];
export const fonts = [];
