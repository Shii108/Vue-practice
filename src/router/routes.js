import ProductDetail from "../components/ProductDetail.vue";
import Products from "../components/Products.vue";
import Layout from "../components/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/:category", component: Products },
      { path: "/:category/:id", component: ProductDetail },
      { path: "/cart", component: Cart },
    ],
  },
];
export { routes };
