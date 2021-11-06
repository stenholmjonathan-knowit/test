import { createStore } from "vuex" 

const state = {
    data: {}
}

const mutations = {
    playSong(state, value){
        state.data = value
    }
}

const actions = {
    async loadSong({commit}){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/nothing%20else%20matters')
        let data = await result.json()
        commit('playSong', data)
    },
    async searchForSong({commit}, [name]){
        console.log('From Store: ' + name);
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + name)
        let data = await result.json()
        commit('playSong', data)
    }
}


export default createStore ({
    state, mutations, actions
})