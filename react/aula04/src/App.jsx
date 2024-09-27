import './App.css'
import UserDetails from './components/UserDetails'

function App() {

  return (
    <>
      <UserDetails user={{ nome: 'Cachorro Chupetao', idade: 1/0 }} />
      <UserDetails user={{ nome: 'Cachorro chupetinha', idade: 17 }} />
    </>
  )
}


export default App
