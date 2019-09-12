<template>
   <ul>
       <li v-for="(movie, key) in movies" :key="key">
           <Movie :movie="movie" :key="key"/>
       </li>
   </ul>
</template>

<script>
import Movie from "./Movie"
import { async } from 'q';
    export default {
        name: "MoviesList",
        data() {
            return {
                movies: [],
                keys: []
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: async function() {
                try {
                    const res = await fetch(
                        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dba3bcd7af5d39ba33fcf9c5f0fd19e3&original_language=en'
                        );
                        const movies = await res.json();
                        this.movies = movies.results;
                } catch (e) {
                    console.log(e)
                }
            }
        },
        components: {
            Movie,
        }
    }
</script>

<style lang="scss" scoped>
ul {
    display: grid;
    list-style: none;
    padding: 1rem;
    margin: 0;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(6, 1fr)
}
</style>