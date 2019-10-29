module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/post/first': { page: '/post/[id]', query: { id: "first" } },
      '/post/second': { page: '/post/[id]', query: { id: "second" } }
    }
  }
}
