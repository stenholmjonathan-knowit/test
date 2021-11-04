import { createStore } from "vuex" 

const state = {
    title: 'VuexPlayer'

}

const mutations = {
    changeTitle(state, value){
        state.title = value
    }
}

const actions = {
    async loadTitle({commit}){
        let result = await fetch('https://mocki.io/v1/a593f10c-6835-48e7-9d3e-9f21017d05de')
        let data = await result.json()
        commit('changeTitle', data.title)
    }
}

export default createStore ({
    state, mutations, actions
})