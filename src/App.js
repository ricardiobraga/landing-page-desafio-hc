
import './App.css';
import Home from './pages/Home'
import Promo from './pages/Promos'
import Footer from './components/Footer'

function App() {
  return (
   <>
   <Home />
   <Promo />
   <Footer className="footer" />
   </>
  );
}

export default App;
