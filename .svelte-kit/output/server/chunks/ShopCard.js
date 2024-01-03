import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const ShopCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { name } = $$props;
  let { price } = $$props;
  let { image = "/no-image.png" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<a${add_attribute("href", `/product/${id}`, 0)} class="group relative flex h-full w-full items-center justify-center rounded-lg bg-black border border-neutral-800 hover:border-blue-600"><img class="h-full w-full object-contain group-hover:scale-105 duration-300"${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)}> <div class="absolute bottom-[60px] left-[25%] right-[25%] text-white rounded-full p-1 border border-neutral-900 bg-[rgba(0,0,0,0.5)] flex justify-between group-hover:border-blue-700 group-hover:bg-blue-700 duration-300"><div class="flex items-center px-4"><span>${escape(name)}</span></div> <div class="flex-none rounded-full bg-blue-600 py-2 px-4 font-bold"><span>$${escape(parseFloat(price).toFixed(2))} USD</span></div></div></a>`;
});
export {
  ShopCard as S
};
