import Vue from "vue";
import * as routingPathes from '@routing/pathes'

export const GlobalRouterPathesPlugin = {
    install: function (Vue, options) {
        Vue.prototype.routingPathes = routingPathes
    }
}