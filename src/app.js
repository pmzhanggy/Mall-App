import Vue from 'vue';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import './lib/mui/css/mui.min.css'
import App from './App.vue';

let vm = new Vue({
  el: '#app',
  render: c => (c(App))
})