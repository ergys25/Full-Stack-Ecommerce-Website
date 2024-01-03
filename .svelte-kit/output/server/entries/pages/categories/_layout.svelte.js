import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const classes = (...classes2) => {
  return classes2.filter(Boolean).join(" ").trim();
};
const CategoryItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { slug } = $$props;
  let { active } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${add_attribute("href", `/categories${slug}`, 0)}${add_attribute("class", classes("hover:text-blue-500 duration-300", active ? "text-blue-500 underline" : "text-white"), 0)}>${escape(name)}</a></li>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="grid grid-cols-8 gap-6"><div><p class="text-neutral-400 uppercase text-xs font-bold" data-svelte-h="svelte-oslt7h">Categories</p> <ul class="text-white mt-2.5 space-y-1">${validate_component(CategoryItem, "CategoryItem").$$render(
    $$result,
    {
      name: "All",
      slug: "",
      active: $page.route.id === "/categories"
    },
    {},
    {}
  )} ${each(data.categories, (category) => {
    return `${validate_component(CategoryItem, "CategoryItem").$$render(
      $$result,
      {
        name: category.name,
        slug: category.slug,
        active: "/" + $page.params.slug === category.slug
      },
      {},
      {}
    )}`;
  })}</ul></div> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
