import "./assets/main.css";
import "./assets/iconfont/iconfont.js";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import Directives from "@/utils/directive"; //导入自定义指令

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router).use(Directives).mount("#app");
