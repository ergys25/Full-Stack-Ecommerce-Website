

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/payment-success/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.629964a3.js","_app/immutable/chunks/scheduler.20e5b616.js","_app/immutable/chunks/index.314d0a10.js"];
export const stylesheets = [];
export const fonts = [];
