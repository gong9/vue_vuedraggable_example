import Vue from 'vue'
import VueRouter from 'vue-router'

import Simple from '../components/simple.jsx'
import TransitionExample from '../components/transition-example.jsx'
import NestedExample from '../components/center'
import TwoLists from '../components/two-list.vue'

Vue.use(VueRouter)

export const routes = [{
        path: '/simple',
        component: Simple,
        label: '示例1'
    },
    {
        path: '/transition-sexample',
        component: TransitionExample,
        label: '示例2'
    },
    {
        path: '/nested-example',
        component: NestedExample,
        label: '示例3'
    },
    {
        path: '/two-list',
        component: TwoLists,
        label: '示例4'
    },
]

export default new VueRouter({
    routes
})