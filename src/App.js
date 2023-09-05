// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation';
import Home from './components/body';
import Footer from './components/footer';

// import Slideshow from './components/slideshow';
// import TeamC from './components/team-people';

function App() {
  return (
   <>
   <Navbar/>
   {/* <Slideshow/> */}
   <Home/>
  
   <Footer/>
   {/* <TeamC/> */}

   </>
  );
}

export default App;
