import { createRouter, createWebHistory } from 'vue-router'
import Player from '/src/components/Player.vue'
import VuexPlayer from '/src/components/VuexPlayer.vue'
import Action from '/src/components/Action.vue'

const routes = [
    {
        path: '/',
        name: 'Player', // om man i sitt script vill byta vy utan att användaren har gjort ngt
        component: Player
    },
    {
        path: '/vuex-player',
        name: 'VuexPlayer', 
        component: VuexPlayer
    },
    {
        path: '/action',
        name: 'Action', 
        component: Action
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router