import * as universal from '../entries/pages/categories/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/categories/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/categories/+layout.js";
export const imports = ["_app/immutable/nodes/2.f7e18395.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.51983e49.js","_app/immutable/chunks/singletons.6022c947.js","_app/immutable/chunks/index.0247fe50.js"];
export const stylesheets = [];
export const fonts = [];
