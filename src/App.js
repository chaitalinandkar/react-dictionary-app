import logo from './book.jpg';
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="img-fluid App-logo" alt="logo" />
        <h1 className='text-center mt-5'>Dictionary App</h1>
      </header>
      <Dictionary searchWord="Sunset" />
      <footer>
        <p>Coded by Chaitali Nandkar and <a href='https://github.com/chaitalinandkar/react-dictionary-app' className='text-decoration-none'>open source</a></p>
      </footer>
    </div>
  );
}

export default App;

