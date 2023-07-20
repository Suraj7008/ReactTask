import logo from './logo.svg';
import './App.css';

function App() {
  // const showText => () {
  //   <Im==
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello World
          <br></br>
          <button>
            <a href='#taphere' /*onClick='showText'*/>Tap Here</a>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
