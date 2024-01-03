

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ed5a5110.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/stores.51983e49.js","_app/immutable/chunks/singletons.6022c947.js","_app/immutable/chunks/index.0247fe50.js"];
export const stylesheets = [];
export const fonts = [];
