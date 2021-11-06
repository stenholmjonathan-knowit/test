import { createStore } from "vuex" 

const state = {
    data: {}
}

const mutations = {
    saveStore(state, value){
        state.data = value
    }
}

const actions = {
    async searchForSong({commit}, [name]){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + name)
        let data = await result.json()
        commit('saveStore', data)
    }
}

export default createStore ({
    state, mutations, actions
})