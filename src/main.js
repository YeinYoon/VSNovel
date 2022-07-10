import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'
import Store from './store.js';
import VueQuillEditor from 'vue-quill-editor';

let app = createApp(App);
app.use(Router).use(Store).use(VueQuillEditor).mount('#app')

window.Kakao.init("335921b1815aaf7a518f5762bf7793ec");
