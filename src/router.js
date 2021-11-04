import { createRouter, createWebHistory } from 'vue-router'
import Player from '/src/components/Player.vue'

const routes = [
    {
        path: '/',
        name: 'Player', // om man i sitt script vill byta vy utan att användaren har gjort ngt
        component: Player
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router