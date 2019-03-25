// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': browser => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('#app', 5000)
        .end()
    },
    'Does not show the movie list if there are no movies': client => {
      client
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible('#search', 5000)
        .expect.element('.movie-card').to.not.be.present;
      client.end();
    }
  }
  