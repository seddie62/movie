<template>
    <div id="search">
        <a-card :bordered="false">
            <div class="flex justify-content-between w-100 align-items-center">
                <a-input-search placeholder="Search..." class="no-border-input" v-model="form.search">
                    <a-icon slot="prefix" type="search" />
                </a-input-search>
                <div class="flex align-items-center h-100">
                    <a-select
                        v-model="form.year"
                        showSearch
                        :loading="genresLoading"
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
                        showSearch
                        :loading="genresLoading"
                        placeholder="Genre"
                        optionFilterProp="children"
                        style="width: 200px"
                        @change="handleChange"
                        :filterOption="filterOption">
                        <a-select-option value="all">All</a-select-option>
                        <a-select-option :value="genre.id" v-for="(genre, index) in genres" :key="index">{{genre.name}}</a-select-option>
                    </a-select>
                    <a-divider class="h-100" type="vertical" />
                    <a-icon class="bar-icon" type="filter"></a-icon>
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
      form: {},
      years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    }
  },
  watch: {
    'form.search': {
      handler: 'handleChange',
      inmediate: true
    }
  },
  methods: {
    filterOption (input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    handleChange () {
        setTimeout(() => {
            if (this.form.genre === 'all') {
                delete this.form.genre
            }
            if (this.form.year === 'all') {
                delete this.form.year
            }
            this.$store.dispatch('setMoviesFilters', this.form)
        }, 1000)
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
