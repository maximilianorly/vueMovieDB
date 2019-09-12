import Vue from 'vue';
import Router from 'vue-router';
import MoviesList from './components/moviesList'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movies List',
            component: MoviesList,
        }
    ]
})