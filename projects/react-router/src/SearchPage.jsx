/* eslint-disable react/prop-types */
import { useEffect } from "react"

export function SearchPage ({routeParams}) {
  
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  // se puede hacer un fecth con la query
  // const res = fetch(`https://api.com/search/${routeParams.query}`)
  return (
  <h1>Has buscado {routeParams.query}</h1>
  )
}