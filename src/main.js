import { createApp } from 'vue'; // Importa createApp de 'vue'
import App from './App.vue';
import router from './router'; // Importa a configuração do Vue Router

const app = createApp(App); // Cria a aplicação Vue

app.use(router); // Usa o router na aplicação Vue
app.mount('#app'); // Monta a aplicação no elemento com id 'app' no HTML
