import { useCallback, useEffect, useRef, useState } from "react"
import "./App.css"

import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"
function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacía")
      return
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula vacía")
      return
    }
    if (search.length < 3) {
      setError("La busqueda debe tener almenos 3 caracteres")
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })
  // const inputRef = useRef()
  // forma no controlada
  /*   const handleSubmit = (e) => {
    e.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(e.target)) 
    console.log(query);
  } */
  // forma controlada
  const debouncedGetmovies = useCallback(
    debounce(search => {
      console.log("search", search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetmovies(newSearch)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            type='text'
            placeholder='Avengers, Star Wars, The matrix...'
          />
          <input
            type='checkbox'
            name=''
            id=''
            onChange={handleSort}
            checked={sort}
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
