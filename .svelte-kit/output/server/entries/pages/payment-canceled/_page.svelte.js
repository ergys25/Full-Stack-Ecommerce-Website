import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="py-32 px-96 flex flex-col items-center space-y-6" data-svelte-h="svelte-1ar3794"><p class="text-2xl text-center font-bold text-red-500">The payment was NOT successful!</p> <a href="/categories" calss="text-blue-500 text-center">Continue shopping</a></div>`;
});
export {
  Page as default
};
