import { configure } from '@storybook/vue';
import Vue from 'vue'
import List from '../components/list/List.vue'
import '../assets/css/tailwind.css'
Vue.component('List', List)

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
