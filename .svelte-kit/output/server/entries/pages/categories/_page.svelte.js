import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { S as ShopCard } from "../../../chunks/ShopCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="col-span-7 grid grid-cols-3 gap-6">${data.products.length > 0 ? `${each(data.products, (product) => {
    return `${validate_component(ShopCard, "ShopCard").$$render(
      $$result,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      },
      {},
      {}
    )}`;
  })}` : `<p class="text-center text-neutral-400 text-2xl col-span-3 mt-12" data-svelte-h="svelte-xzwzfl">No products found</p>`}</div>`;
});
export {
  Page as default
};
