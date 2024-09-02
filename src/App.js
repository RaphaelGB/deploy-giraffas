import 'bootstrap/dist/css/bootstrap.min.css';  
import Navbar from "./components/Navbar"
import Caroussel from "./components/Caroussel"
import './App.css';
import Cards from './components/Cards';
import Maps from './components/Maps';
import SocialMedia from './components/SocialMedia';
import Download from './components/DownloadApp';
import Footer from './components/Footer';
import { Carrossel } from './components/Carrossel';
import carrousel3 from "./public/IMG/carrousel3.jpg"
import carrousel4 from "./public/IMG/carrousel4.jpg"
import carrousel5 from "./public/IMG/carrousel5.jpg"
import carrousel6 from "./public/IMG/carrousel6.jpg"

function App() {
  const slides = [
    <img src={carrousel3} class="d-block w-100" alt="Imagem 1 Não encontrada" />,
    <img src={carrousel5} class="d-block w-100" alt="Imagem 3 Não encontrada" />,
    <img src={carrousel6} class="d-block w-100" alt="Imagem 4 Não encontrada" />
  ]
  
  return (
    <div className="App">
      <Navbar />
        <Carrossel data={slides}/>
        <Cards />
        <Maps />
        <SocialMedia />
        <Download />
        <Footer />

    </div>
  );
}

export default App;
