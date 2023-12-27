import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    name: "Kikobeats",
    userName: "kikobeats",
    initialIsFollowing: true
  },
  {
    name: "Juan Morales",
    userName: "JuanEsmorales",
    initialIsFollowing: true
  },
  {
    name: "Elon Musk",
    userName: "elonmusk",
    initialIsFollowing: false
  },
  {
    name: "Miguel Duran",
    userName: "midudev",
    initialIsFollowing: false
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, initialIsFollowing } = user
          return (
            <TwitterFollowCard key={userName} 
            userName= {userName} 
            initialIsFollowing={initialIsFollowing}
            > 
            {name} 
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}