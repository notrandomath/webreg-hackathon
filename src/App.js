import './App.scss';
import SideBar from './components/sideBar/sideBar';
import Content from './components/content/content';

function App() {
  return (
    <div className="app">
      <SideBar className="sideBar"/>
      <Content className="content"/>
    </div>
  );
}

export default App;
