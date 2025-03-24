import Layout from "../Layout.vue";
import ProductDetail from "../ProductDetail.vue";
import Products from "../Products.vue";
import cart from "../cart.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/:category", component: Products },
      { path: "/:category/:id", component: ProductDetail },
      { path: "/cart", component: cart },
    ],
  },
];
export { routes };
