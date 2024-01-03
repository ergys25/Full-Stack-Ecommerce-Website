

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.45ae1eb1.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/cart.54eca98a.js","_app/immutable/chunks/index.0247fe50.js"];
export const stylesheets = ["_app/immutable/assets/0.61770172.css"];
export const fonts = [];
