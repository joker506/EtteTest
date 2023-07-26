import App from "./App.vue";
import router from "./router";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);
app.use(router);

app.mount("#app");
