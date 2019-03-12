<template>
    <a-spin :spinning="loading">
        <!-- this component shows the cast of the movie selected -->
        <a-card title="Cast" :bordered="false" class="rounded movie-detail-genre">
            <div class="flex flex-wrap">
                <a-card @click="viewMore(cast.id)" class="cast-card rounded" v-for="(cast, index) in movieCast.slice(0, number)" :key="index" hoverable style="width: 140px">
                    <img alt="" class="cast-image" :src="`https://image.tmdb.org/t/p/w200${cast.profile_path}`" slot="cover"/>
                    <a-card-meta>
                        <template slot="title"><p class="m-0 f-12 cast-name">{{cast.name}}</p></template>
                        <template slot="description"><p class="mb-1 f-12 cast-character">{{cast.character}}</p></template>
                    </a-card-meta>
                </a-card>
                <div class="h-300 flex align-items-center">
                    <a-button :disabled="noMoreDataToShow" @click="loadMore" class="transparent-button" type="default">
                        MORE<a-icon type="double-right" />
                    </a-button>
                </div>
            </div>
        </a-card>
    </a-spin>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MovieCast',
  data () {
    return {
      number: 5
    }
  },
  computed: {
    ...mapGetters(['movieCast', 'movieCastState']),
    loading () {
      return this.movieCastState === 'LOADING'
    },
    noMoreDataToShow () {
      return this.number >= this.movieCast.length
    }
  },
  methods: {
    // click card to reroute to cast detail
    viewMore (castId) {
      this.$router.push(`/cast/${castId}`)
    },
    // load more cast members
    loadMore () {
      this.number += 5
    }
  }
}
</script>

<style lang="scss" scoped>
.cast-card{
  margin: 10px;
}
.h-300{
    height: 300px;
}
</style>
