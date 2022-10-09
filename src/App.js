import logo from './logo.svg';
import './App.css';
import TopNavigation from './components/topnavigation/TopNavigation';
import Home from './components/bodyContent/Home';
import BottomNav from './components/bottomnavigation/BottomNav';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <Home/>
      <BottomNav/>
      <Footer/>
    </div>
  );
}

export default App;
