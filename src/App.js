import './App.css';
import Favorites from './components/Favorites';
import Waifus from './components/Waifus';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './Context';

function App() {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Waifus />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
