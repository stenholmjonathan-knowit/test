<template>
    <footer>footer here please: {{title}}</footer>
</template>

<script>
export default {
    computed:{
        title(){
            return this.$store.state.title
        }
    }
}

</script>