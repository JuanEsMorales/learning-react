import { useEffect, useState } from "react"
const CAT_END_POINT_IMAGE_URL = "https://api.thecatapi.com/v1/images/search"

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(" ").slice(0, 3).join(" ")
    console.log(firstWord)
    fetch(CAT_END_POINT_IMAGE_URL)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response[0]
        setImage(url)
      })
  }, [fact]) 
  return {image}
}