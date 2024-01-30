import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { LIstOfUsers } from './components/LIstOfUsers'

function App() {

  return (
    <>
        <LIstOfUsers />
        <CreateNewUser />
        <Toaster richColors />
    </>
  )
}

export default App
