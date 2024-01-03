import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="text-white group grid grid-cols-3 gap-6 mt-6 bg-black rounded-md h-[720px] border border-neutral-800 p-10"><div class="col-span-2 h-full flex items-center justify-center"><img${add_attribute("src", data.product.image, 0)}${add_attribute("alt", data.product.name, 0)} class="h-[500px] group-hover:h-[620px] duration-500"></div> <div class="flex flex-col space-y-4"><h1 class="text-5xl bold">${escape(data.product.name)}</h1> <div class="bg-blue-500 w-fit py-1.5 px-2.5 rounded-full">$${escape(parseFloat(data.product.price).toFixed(2))} USD</div> <hr> <p class="text-neutral-400">${escape(data.product.description)}</p> <button class="bg-blue-600 rounded-full px-6 py-4 hover:bg-blue-500 duration-300" data-svelte-h="svelte-jxgwvz">Add to cart</button></div></div>`;
});
export {
  Page as default
};
