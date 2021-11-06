<template>
  <div>
    <button @click="pause()">Pause</button>
    <button @click="playNextVideo()">Play Next Song</button>
    <input type="text" placeholder="Search for a song" v-model="name" />
    <button @click="searchSong">Search for a song</button>
    <ol>
      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button @click="play(songs.videoId)">{{ songs.name }}</button>
      </li>
    </ol>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: ''
    }
  },
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    searchSong() {
      this.$store.dispatch('searchForSong', [this.name])
      
      var videoIdsArray = []
      for (let index = 0; index < this.$store.state.data.content.length; index++) {
        videoIdsArray.push(this.$store.state.data.content[index].videoId);
      }

      window.player.loadPlaylist(videoIdsArray)
    },
    playNextVideo(){
      window.player.nextVideo()
    }
  },
  mounted() {
    this.$store.dispatch('loadSong')
    this.$store.state.data
  }
}
</script>