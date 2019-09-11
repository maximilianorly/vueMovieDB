<template>
    <header>
        <h1>{{ newTitle }}</h1>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: String
        },
        data() {
            return {
                name: "Max",
            }
        },
        computed: {
            newTitle: function () {
                console.log(this.title)
                console.log(this.name)
                return `${this.title
                .split("")
                .reverse()
                .join("")}`; 
            },
        }
    }
</script>

<style lang="scss" scoped>
    header {
     background-color: #111;
     padding: 20px;
     color: white;
    }
    h1 {
        margin: 0;
    }
</style>