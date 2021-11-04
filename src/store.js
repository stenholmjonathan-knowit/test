import { createStore } from "vuex" 

const state = {
    title: 'VuexPlayer'
}

const mutations = {
    playSong(state, value){
        state.title = value
    }
}

const actions = {
    async loadSong({commit}){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/metallica')
        let data = await result.json()
        console.log(data);
        commit('playSong', data.title)
    }
}

export default createStore ({
    state, mutations, actions
})