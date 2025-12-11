import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="logo-container">
          <span style={{ fontSize: '2rem' }}>🍋</span>
          <h2>LITTLE LEMON</h2>
        </div>
        <Nav />
      </header>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;