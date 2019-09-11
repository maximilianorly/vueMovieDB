<template>
  <div id="app" v-if="status === 'ready'">
    <Header :title="title"/>
    <MoviesList />
  </div>
  <div v-else-if="status === 'Loading...'">
    "Loading..."
  </div>
  <div v-else>
    "Error"
  </div>
</template>

<script>
import Header from './components/Header'
import MoviesList from './components/moviesList'


export default {
  name: 'app',
  data() {
    return {
    hello: "Hello Worldie",
    title: "Vue Movie DB",
    isTrue: true,
    status: "ready"
    }
  },
  components: {
    Header,
    MoviesList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
