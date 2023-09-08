import './App.css';
import Logo from './components/logo'
function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <Logo/>
        <ul className='opcoes'>
          <li className='opcao'><p><strong>Categorioas</strong></p></li>
          <li className='opcao'><p><strong>Minha Estante</strong></p></li>
          <li className='opcao'><p><strong>Favoritos</strong></p></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
