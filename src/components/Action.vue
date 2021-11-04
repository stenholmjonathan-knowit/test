<template>
    <h1>{{title}}</h1>
    <button @click="changeTitle">change title</button>
</template>


<script>
export default {
    computed:{
        title(){
            return this.$store.state.title
        }
    },
    methods:{
        changeTitle(){
            this.$store.dispatch('loadTitle')
        }
    }
}

</script>