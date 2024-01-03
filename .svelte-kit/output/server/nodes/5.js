

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cart/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5944825b.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/cart.54eca98a.js","_app/immutable/chunks/index.0247fe50.js","_app/immutable/chunks/singletons.6022c947.js"];
export const stylesheets = [];
export const fonts = [];
