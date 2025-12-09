import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <span style={{ fontSize: '2rem' }}>🍋</span>
          <h2>LITTLE LEMON</h2>
        </div>
        <Nav />
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;