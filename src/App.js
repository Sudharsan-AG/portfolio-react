import logo from './logo.svg';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from  './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
