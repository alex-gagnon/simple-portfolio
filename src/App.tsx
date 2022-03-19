import './App.css';
import Home from './pages/home';

const fs = require('fs')

const cert = fs.readFileSync('../ssl/alex-gagnon_com.csr')
const key = fs.readFileSync('../ssl/alex-gagnon_com.key')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
