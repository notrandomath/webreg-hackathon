import './App.scss';
import TopBar from './components/topBar/topBar';
import Content from './components/content/content';

function App() {
  return (
    <div className="app">
      <TopBar className="topBar"/>
      <Content className="content"/>
    </div>
  );
}

export default App;
