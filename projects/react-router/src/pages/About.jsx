import { Link } from '../Link'


export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJSNbMkwgt2AYWARiGsKS2vcZpxtKVsn6utIwyXjFVxrXs=s288-c-no" alt="Foto de juan esteban" />
      </div>
      <p>¡Hola! Soy Juan Esteban y estoy aprendiendo a hacer un clon de React Router</p>
      <Link to="/">Ir al inicio</Link>
    </>
  )
}