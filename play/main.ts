import { createApp } from "vue";
import App from "./app.vue";
import yibaikuaiUI from "@yibaikuai-ui/components";
const app = createApp(App);
app.use(yibaikuaiUI);
app.mount("#app");
