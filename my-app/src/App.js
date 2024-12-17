import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <div>
        {}
        <Sidebar />
      </div>
      <div>
        <NavBarSimple />
      </div>
    </div>
  );
}

export default App;