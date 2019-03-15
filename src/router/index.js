import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/movies/pages/HomePage'
import MovieDetail from '@/movies/pages/MovieDetail'
import CastDetail from '@/cast/pages/CastDetail'
import Client from '@/pages/Client'

import { MOVIES_PATH, MOVIES_ROUTE, MOVIE_DETAIL_PATH, MOVIE_DETAIL_ROUTE, PERSON_DETAIL_PATH, PERSON_DETAIL_ROUTE } from './router-names'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Client,
      children: [
        {
          path: MOVIES_PATH,
          name: MOVIES_ROUTE,
          component: HomePage
        },
        {
          path: MOVIE_DETAIL_PATH,
          name: MOVIE_DETAIL_ROUTE,
          component: MovieDetail
        },
        {
          path: PERSON_DETAIL_PATH,
          name: PERSON_DETAIL_ROUTE,
          component: CastDetail
        }
      ]
    }
  ]
})
