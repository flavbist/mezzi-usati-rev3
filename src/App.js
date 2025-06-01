import { useState } from 'react';
import Consultazione from './components/Consultazione';
import Gestione from './components/Gestione';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <header>
        <h1>Gestione Mezzi Usati</h1>
        <nav>
          <button onClick={() => setCurrentPage('consultazione')}>Consultazione</button>
          <button onClick={() => setCurrentPage('gestione')}>Gestione</button>
        </nav>
      </header>

      <main>
        {currentPage === 'consultazione' && <Consultazione />}
        {currentPage === 'gestione' && <Gestione />}
        {currentPage === 'home' && (
          <div className="home">
            <h2>Benvenuto</h2>
            <p>Scegli un'opzione dal menu</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;