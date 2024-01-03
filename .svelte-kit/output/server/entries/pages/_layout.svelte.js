import { c as create_ssr_component, g as get_store_value, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { c as cartItems } from "../../chunks/cart.js";
const app = "";
const CartButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quantity = get_store_value(cartItems).length;
  cartItems.subscribe((newCartItems) => {
    quantity = newCartItems.length;
  });
  return `<div class="relative border border-white rounded-lg p-2 hover:border-blue-500 duration-300"><img src="shopping-cart.png" alt="Cart" class="h-4"> ${quantity > 0 ? `<div class="absolute top-[-10px] right-[-10px] p-1 w-5 h-5 bg-blue-500 flex justify-center items-center rounded-full"><span class="text-xs text-white">${escape(quantity)}</span></div>` : ``}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex justify-between items-center py-6 text-neutral-400 font-bold"><ul class="flex items-center space-x-8" data-svelte-h="svelte-gd72ul"><li><a href="/"><img src="/logo.png" alt="Svelte Commerce Logo" class="h-8"></a></li> <li><a href="/categories" class="hover:text-blue-500 duration-300">Categories</a></li> <li><a href="/about" class="hover:text-blue-500 duration-300">About</a></li></ul> <div><a href="/cart">${validate_component(CartButton, "CartButton").$$render($$result, {}, {}, {})}</a></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex justify-between py-6 border-t border-neutral-400 text-neutral-400" data-svelte-h="svelte-1c2508p"><p>MIT Licence</p> <p>Created by Ergys Hila</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="bg-[#171717] min-h-screen flex flex-col justify-between px-96">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="flex-1">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Layout as default
};
