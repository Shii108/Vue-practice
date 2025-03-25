// Vue and plugins
import { createApp } from "vue";
import { createPinia } from "pinia";

// Main App component
import App from "./App.vue";

// Router
import router from "./components/router/index.js";

// Styles
import "./style.css";

// Create Vue application
const app = createApp(App);

// Register plugins
app.use(router);
app.use(createPinia());

// Mount the application
app.mount("#app");