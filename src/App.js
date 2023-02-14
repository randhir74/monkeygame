import SearchBar from './Components/SearchBar';
import { back} from './assets';
import Navbars from './Components/Navbar';
import Carousels from './Components/Carousel';
import Container from './Components/Container';
import Footer from './Components/Footer';
import More from './Components/More';
function App() {
  return (
    <>
    <div className='p-0 m-0 h-[700px] ' style={{backgroundImage:`url(${back})`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <Navbars/>
      <div className='grid grid-flow-row grid-cols-3 '>
      <Carousels/>
      
      
      </div>
    </div>
      <Container/>
      <Footer></Footer>
      
    </>
     
  );
}

export default App;
