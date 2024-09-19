import './App.css'
import './style.scss'
import PrincipalConteudo from './components/PrincipalConteudo'
import Artigo from './components/article'
import Lista from './components/Lista'

function App() {

  return (
    <>
      <header>
        <div className="conteudoHeader">
          <h1>Noticias Chupetonicas</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </header>
      <PrincipalConteudo />
      <div className="artigos">
        <Artigo titulo="Chupetão na lua" noticia="A moeda virtual chupeCoin atingiu a maior alta de todos os tempos investidores comemoram a alta" />
        <Artigo titulo="Crise de chupetas" noticia="A crise de chupetas atinge o mundo todo, a falta de chupetas no mercado preocupa pais e mães" />
      </div>


      <Lista />
    
    </>
  )
}

export default App
