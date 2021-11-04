<template>
    <h1>Ljudio</h1>

    <router-link to="/">Player</router-link> | 
    <router-link to="/vuex-player">VuexPlayer</router-link> | 
    <router-link to="/action">Action</router-link>

    <router-view></router-view> 
    <FooterComponent/>
</template>


<script>
import FooterComponent from '/src/components/Footer.vue'

export default {
    components:{ // jag ska använda de komponenter som jag importerat
        FooterComponent
    }
}
</script>