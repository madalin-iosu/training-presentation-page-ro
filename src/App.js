import './App.css';
import Cursuri from './pages/Cursuri';
import Despre from './pages/despreNoi/Despre';
import Home from './pages/Home';
import Servicii from './pages/Servicii';
import { Route, Routes } from "react-router-dom";
import Details from './pages/cursDetails/Details';
import Rootlayout from './layouts/Rootlayout';
import NotFound from './pages/NotFound';



function App() {

  return (
    <>
      <div className="hero-banner">CURUL DE ELECTRICIAN CONSTRUCTOR VA ÎNCEPE IN 17.03.2023</div>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Rootlayout />}>
            <Route index element={<Home />} />
            <Route path="/cursuri" element={<Cursuri />} />
            <Route path="/despre-noi" element={<Despre />} />
            <Route path="/servicii" element={<Servicii />} />
            <Route path="cursuri/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}


export default App;
