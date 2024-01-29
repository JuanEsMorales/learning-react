/* eslint-disable react/prop-types */
import "./App.css"
import { Router } from "./Router"
import { SearchPage } from "./SearchPage"
import { Route } from "./Route"
import { lazy } from "react"
import { Suspense } from "react"

const LazyAboutPage = lazy(() => import("./pages/About"))
const LazyHomePage = lazy(() => import("./pages/Home"))
const routes = [
  {
    path: "/search/:query",
    component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={ <h1>Loading...</h1> } >
        <Router routes={routes}>
          <Route path='/about' component={LazyAboutPage} />
          <Route path='/' component={LazyHomePage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
