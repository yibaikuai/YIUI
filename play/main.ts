import { createApp } from "vue";
import App from "./app.vue";
import YIUI from "@yibaikuai-ui/components";
const app = createApp(App);
app.use(YIUI);
app.mount("#app");
