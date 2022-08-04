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
        <p>Coded by <a href='https://github.com/chaitalinandkar' className='text-decoration-none'>Chaitali Nandkar</a> and open sourced on <a href='https://github.com/chaitalinandkar/react-dictionary-app' className='text-decoration-none'>Github</a>{" "}
        and hosted on <a href='https://funny-dragon-1b9bc3.netlify.app' className='text-decoration-none'>Netlify</a></p>
      </footer>
    </div>
  );
}

export default App;

