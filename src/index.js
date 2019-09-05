import Vue from 'vue'
import MainComponent from './MainComponent'
import {router} from "./routing";
import '@styles/index.scss'
import {GlobalRouterPathesPlugin} from "./vue_plugins/router_pathes";
import {store} from "./store";

Vue.use(GlobalRouterPathesPlugin)

export const RootComponent = new Vue({
    el: '#app',
    render: h => h(MainComponent),
    router,
    store
})