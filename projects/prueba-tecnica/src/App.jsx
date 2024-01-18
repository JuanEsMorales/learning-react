import "./App.css"
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

export function App() {
  const { fact, refreshRandomFact } = useCatFact()
  const {image} = useCatImage({ fact })
   
  const handleClick = async () => {
    refreshRandomFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
        <button onClick={handleClick}>Generar nueva curiosidad</button>
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt='Generated random image of a cat' />}
    </main>
  )
}
