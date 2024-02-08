import {resolve} from 'path'

export default {
  base: '/lesson-3j/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        movie: resolve(__dirname, '/src/movie_search/movie.html'),
        // @ts-ignore
        ALLpackages: resolve(__dirname, '/src/all_packages-nodeJS/packagesH.html'),
        // @ts-ignore
        passing_json: resolve(__dirname, '/src/passing_json/passing_json_INDEX.html'),
        // @ts-ignore
        example_database: resolve(__dirname, '/src/example_database/e_database_i.html'),
      }
    }
  }
}