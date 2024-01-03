import { c as create_ssr_component, d as each, v as validate_component } from "../../chunks/ssr.js";
import { S as ShopCard } from "../../chunks/ShopCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-3 gap-6 mt-6 mb-6">${data.products.length > 0 ? `${each(data.products, (product) => {
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
  })}` : `<p class="w-full text-center pt-32" data-svelte-h="svelte-1p8s8c7">No products are currently available</p>`}</div>`;
});
export {
  Page as default
};
