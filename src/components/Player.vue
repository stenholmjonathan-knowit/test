<template>
  <div>
    <button @click="playSong()">Play</button>
    <button @click="pause()">Pause</button>
    <button @click="playPreviousVideo()">Play Previous Song</button>
    <button @click="playNextVideo()">Play Next Song</button>
    <input type="text" placeholder="Search for a song" v-model="name" />
    <button @click="searchSong">Search</button>
    <ol>
      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button @click="playByIndex(songs.videoId)">{{ songs.name }}</button>
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
    playByIndex(id){
      for (let index = 0; index < this.$store.state.data.content.length; index++) {
        if (this.$store.state.data.content[index].videoId == id) {
          window.player.playVideoAt(index)
        }
      }
    },
    playSong(){
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    async searchSong() {
      await this.$store.dispatch('searchForSong', [this.name])

      var videoIdsArray = []
      for (let index = 0; index < this.$store.state.data.content.length; index++) {
        videoIdsArray.push(this.$store.state.data.content[index].videoId);
      }

      await window.player.loadPlaylist(videoIdsArray)
      const loadSongs = new Promise((resolve) => {
        resolve(window.player.loadPlaylist(videoIdsArray))
      });

      loadSongs.then(() => {
        window.player.pauseVideo()
      });
    },
    playNextVideo(){
      window.player.nextVideo()
    },
    playPreviousVideo(){
      window.player.previousVideo()
    }
  },
  mounted() {
    this.$store.dispatch('loadSong')
    this.$store.state.data
  }
}
</script>