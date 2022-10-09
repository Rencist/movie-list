import './App.css';
import Favorites from './components/Favorites';
import Waifus from './components/Waifus';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './Context';

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Waifus />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
