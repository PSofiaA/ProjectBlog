import { createApp } from "vue";
import App from "./App.vue";
import UIcomponents from "@/components/UI";

const app = createApp(App);

// РЕГИСТРАЦИЯ UI КОМПОНЕНТОВ
UIcomponents.forEach((element) => {
  app.component(element.name, element);
  console.log(element);
});

app.mount("#app");
