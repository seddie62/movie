export default {
  createQueryParams (filters, page = 1) {
    var query = `page=${page}`
    if (this.present(filters)) {
      if (this.present(filters.genre)) {
        query = query + `&with_genres=${filters.genre}`
      }
      if (this.present(filters.year)) {
        query = query + `&year=${filters.year}`
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
  }
}
