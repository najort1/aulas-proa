import './App.css'
import Primeiro from './components/conteudoPrincipal'
import Header from './components/headerPagina'
import FooterPagina from './components/footerPagina'
import Artigo from './components/artigoPagina'
import SideBarPagina from './components/sideBarPagina'

function App() {

  return (
    <>

      <Header/>
      <Primeiro/>
      <Artigo/>
      <SideBarPagina/>
      <FooterPagina/>


    </>
  )
}

export default App
