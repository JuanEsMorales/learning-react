export const searchMovies = async ({ search }) => {
  if (search === '') return null
  
  try {
    // setResmovies(responseMovies)
    const res = await fetch(`https://www.omdbapi.com/?apikey=57645470&s=${search}`)
    const json = await res.json()
    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    console.log(e);
    throw new Error('Error searching movies')
  }
}