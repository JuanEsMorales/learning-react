import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Router } from "./Router";
import { getCurrentPath } from "./utils";
import { Route } from "./Route";
import { Link } from "./Link";
vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })
  it('should render the component of the first route that matches', () =>{ 
    getCurrentPath.mockReturnValue('/')

    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]
    render(<Router routes={routes} />)  
    expect(screen.getByText('Home')).toBeTruthy()
  })
  it('should navigate using links', async () =>{ 
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route path='/' component={() => {
          return (
            <>
              <h1>Home</h1>
              <Link to='/about'>About</Link>
            </>
          )
        }}/>
        <Route path='/about' component={() => <h1>About</h1>} />
      </Router>)
    const button = screen.getByText(/About/)
    fireEvent.click(button)
    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})