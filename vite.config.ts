export default {
  base: '/lesson-3j/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        movie_search: resolve(__dirname, './src/movie_search/movie.html'),
      }
    }
  }
}