<template>
    <a-card title="info" :bordered="false" class="rounded movie-detail-genre">
        <div class="cast-info">
            <div class="flex align-items-center my-2">
                <h5>title</h5>
                <h4 class="p-0 m-0">{{movie.original_title}}</h4>
            </div>
            <div class="flex align-items-center my-2">
                <h5>Languages</h5>
                <div class="flex">
                    <a-tag v-for="lang in movie.spoken_languages" :key="lang.id" color="#fcbc0d">{{lang.name}}</a-tag>
                </div>
                <h4 class="p-0 m-0">{{movie.known_for_department}}</h4>
            </div>
            <div class="flex align-items-center my-2">
                <h5>release date</h5>
                <h4 class="p-0 m-0">{{movie.release_date}}</h4>
            </div>
            <div class="flex align-items-center my-2">
                <h5>homepage</h5>
                <a :href="movie.homepage" class="p-0 m-0">{{movie.homepage}}</a>
            </div>
            <div class="flex align-items-center my-2">
                <h5>Rating</h5>
                <div class="flex align-items-center">
                    <a-rate allowHalf :value="rate" disabled />
                    <p class="p-0 m-0 f-12 vote_count">{{movie.vote_count}} votes</p>
                </div>
            </div>
        </div>
    </a-card>
</template>

<script>
export default {
  name: 'MovieInfo',
  props: ['movie'],
  computed: {
    rate () {
      return this.movie.vote_average / 2
    }
  }
}
</script>

<style lang="scss" scoped>
.cast-info{
  h5{
    font-size: 11px;
    text-transform: uppercase;
    color: #bababa;
    font-weight: bold;
    width: 30%;
  }
  p{
    font-size: 12px;
  }
}
</style>
