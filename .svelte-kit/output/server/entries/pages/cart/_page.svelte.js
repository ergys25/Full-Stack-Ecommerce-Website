import { c as create_ssr_component, b as add_attribute, e as escape, g as get_store_value, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { c as cartItems } from "../../../chunks/cart.js";
const CartItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { product } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<div class="group relative grid grid-cols-6 gap-2 border-b border-neutral-600"><div><img${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}></div> <div class="col-span-3"><p class="text-white font-bold text-xl">${escape(product.name)}</p> <p class="text-neutral-500">${escape(product.description)}</p></div> <div class="col-span-2"><p class="text-white">$${escape(parseFloat(product.price).toFixed(2))} USD</p></div> <button class="absolute top-0 right-0 rounded-full p-1 border border-white opacity-0 group-hover:opacity-100 hover:border-red-500 duration-300" data-svelte-h="svelte-zr4z8z"><img src="/delete-icon.png" alt="" class="h-4 w-4"></button></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = get_store_value(cartItems);
  const calculateTotal = (arr) => {
    return arr.reduce(
      (acc, item) => {
        return acc + item.price * item.quantity;
      },
      0
    );
  };
  cartItems.subscribe((newCartItems) => {
    items = newCartItems;
    calculateTotal(newCartItems);
  });
  return `<div class="text-white px-96 py-12"><div class="flex justify-between items-center" data-svelte-h="svelte-1x0shlk"><h1 class="text-4xl font-bold">Cart</h1> <a href="/categories" class="text-neutral-400 underline hover:text-blue-500 duration-300">Continue shopping</a></div> <div class="py-12 flex flex-col space-y-4">${items.length > 0 ? `${each(items, (product, index) => {
    return `${validate_component(CartItem, "CartItem").$$render($$result, { product, index }, {}, {})}`;
  })}` : `<p class="text-center text-neutral-400 text-2xl mt-12" data-svelte-h="svelte-1bkb9st">Your cart is empty</p>`}</div> ${items.length > 0 ? `<div class="flex flex-col items-end space-y-4"><h2 class="text-xl font-bold" data-svelte-h="svelte-1w1034s">Total: $0 USD</h2> <button class="bg-blue-500 rouned-full px-4 py-2 font-bold hover:bg-blue-600 duration-300" data-svelte-h="svelte-1r6d586">Proceed to checkout</button></div>` : ``}</div>`;
});
export {
  Page as default
};
