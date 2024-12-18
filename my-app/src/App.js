import css from './App.module.css';
import Sidebar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <div>
        {}
        <Sidebar />
      </div>
      <div>
        {/* <NavBarSimple /> */}
        <NavBarForm />
        <Content />
      </div>
    </div>
  );
}

export default App;