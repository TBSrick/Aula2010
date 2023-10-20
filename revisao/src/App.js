import Imagem from './IMG/lis.jpg';
import './App.css';
import NoticiaComponente from './Components/Noticia';

function App() {
  return (
    <div className="App">
      <h1>Mminha primeira noticia</h1>
      <NoticiaComponente
      titulo="Um titulo muito legal"
      imagem={Imagem}
      descr="Uma descrição muito mais legal"
      categ="Muito legal"/>
    
    </div>
  );
}

export default App;
