<template>
    <div id="search">
        <a-card :bordered="false">
            <div class="flex justify-content-between w-100 align-items-center">
                <a-input-search placeholder="Search..." class="no-border-input" v-model="form.search">
                    <a-icon slot="prefix" type="search" />
                </a-input-search>
                <div class="flex align-items-center h-100">
                    <a-select
                        v-model="form.sort_params"
                        showSearch
                        placeholder="Sort By"
                        optionFilterProp="children"
                        style="width: 200px; margin-right: 5px"
                        @change="handleChange"
                        :filterOption="filterOption">
                        <a-select-option :value="sort.value" v-for="(sort, index) in sort_params" :key="index">{{sort.label}}</a-select-option>
                    </a-select>
                    <a-select
                        v-model="form.year"
                        showSearch
                        placeholder="Year"
                        optionFilterProp="children"
                        style="width: 100px; margin-right: 5px"
                        @change="handleChange"
                        :filterOption="filterOption">
                        <a-select-option value="all">All</a-select-option>
                        <a-select-option :value="year" v-for="(year, index) in years" :key="index">{{year}}</a-select-option>
                    </a-select>
                    <a-select
                        v-model="form.genre"
                        mode="multiple"
                        showSearch
                        :loading="genresLoading"
                        placeholder="Genre"
                        optionFilterProp="children"
                        style="min-width: 200px"
                        @change="handleChange"
                        :filterOption="filterOption">
                        <a-select-option value="all">All</a-select-option>
                        <a-select-option :value="genre.id" v-for="(genre, index) in genres" :key="index">{{genre.name}}</a-select-option>
                    </a-select>
                </div>
            </div>
        </a-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchBar',
  data () {
    return {
      form: {
        genre: []
      },
      years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      sort_params: [
        {label: 'Popularity Ascending', value: 'popularity.asc'},
        {label: 'Popularity Descending', value: 'popularity.desc'},
        {label: 'Release Date Ascending', value: 'release_date.asc'},
        {label: 'Release Date Descending', value: 'release_date.desc'},
        {label: 'Rating Ascending', value: 'vote_avarage.asc'},
        {label: 'Rating Descending', value: 'vote_avarage.desc'},
        {label: 'Title(A - Z)', value: 'original_title.asc'},
        {label: 'Title(Z - A)', value: 'original_title.desc'}
      ]
    }
  },
  watch: {
    'form.search': {
      handler: 'handleSearchChange',
      inmediate: true
    }
  },
  methods: {
    filterOption (input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    handleSearchChange () {
        setTimeout(() => {
            this.$store.dispatch('setMoviesFilters', this.form)
        }, 1000)
    },
    handleChange () {
        if (this.form.genre.find(el => el === 'all')) {
            // delete this.form.genre
            this.form.genre = []
        }
        if (this.form.year === 'all') {
            delete this.form.year
        }
        this.$store.dispatch('setMoviesFilters', this.form)
    }
  },
  computed: {
    ...mapGetters(['genres', 'genresState']),
    genresLoading () {
      return this.genresState === 'LOADING'
    }
  }
}
</script>

<style lang="scss" scoped>
#search{
    height: 60px;
    .ant-card{
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
        box-shadow: 0 2px 20px 1px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        padding: 0px;
        height: 60px;
    }

    .bar-icon{
        font-size: 18px;
        margin-left: 16px;
        color: #b5bdc8;
    }
}
</style>
