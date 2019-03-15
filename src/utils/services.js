export default {
  createQueryParams (filters, page = 1) {
    var query = `page=${page}`
    if (this.present(filters)) {
      if (this.present(filters.genre)) {
        if (filters.genre.find(el => el !== 'all')) {
            query = query + `&with_genres=${filters.genre}`
        }
      }
      if (this.present(filters.year)) {
        query = query + `&year=${filters.year}`
      }
      if (this.present(filters.sort_params)) {
        query = query + `&sort_by=${filters.sort_params}`
      }
    }
    return query
  },
  present (value) {
    if (!value) {
      return false
    }
    if (typeof value === 'object') {
      if (Object.keys(value).length > 0) {
        return true
      }
      return false
    }
    if (Array.isArray(value) || typeof value === 'string') {
      return value && value.length > 0
    } else {
      return !!value
    }
  },
  empty (value) {
    return !this.present(value)
  },
  convertToHoursAndMinutes (value) {
    if (value === 0 || typeof value === 'undefined') {
        return '00h 00m'
      } else {
        var num = value
        var hours = (num / 60)
        var rhours = Math.floor(hours)
        var minutes = (hours - rhours) * 60
        var rminutes = Math.round(minutes)
        // var timeArray = new Array
        var parsedHours = rhours < 10 ? '0' + rhours : rhours
        var parsedMinutes = rminutes < 10 ? '0' + rminutes : rminutes
        return `${parsedHours}h ${parsedMinutes}m`
      }
  },
}
