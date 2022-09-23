
import '../styles/App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from '../components/menu/Menu';

//paginas
import Home from '../pages/Home'
import About from '../pages/about/About'
import Proyect from '../pages/Proyectos'
import Productos from '../pages/Productos'
import Blogs from '../pages/Blogs';
import Footer from '../containers/footer/Footer';
import Error404 from '../pages/error404/Error404';
import Diseños from '../pages/diseño/Diseños'
import CssView from '../pages/CssView/Css_View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menu/>
          <Routes>
            <Route exact path='/andres-tech/' element={<Home/>}/>
            <Route exact path='/andres-tech/about' element={<About/>}/>
            <Route exact path='/andres-tech/proyect' element={<Proyect/>}/>
            <Route exact path='/andres-tech/Productos' element={<Productos/>}/>
            <Route exact path='/andres-tech/Blogs' element={<Blogs/>}/>
            <Route exact path='/andres-tech/Dis' element={<Diseños/>}/>
            <Route exact path='/andres-tech/CssView' element={<CssView/>}/>
            <Route exact element={<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}



export default App;
