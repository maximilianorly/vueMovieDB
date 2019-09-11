<template>
   <ul>
       <li v-for="movie in movies">
           <Movie :movie="movie"/>
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
            }
        },
        created: function() {
            this.fetchData();
        },
        methods: {
            fetchData: async function() {
                try {
                    const res = await fetch(
                        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/&api_key=dba3bcd7af5d39ba33fcf9c5f0fd19e3'
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

</style>