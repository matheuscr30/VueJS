import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-c052b.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next(response => {
    console.log(response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
