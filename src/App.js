import "./App.scss";
import TopBar from "./components/topBar/topBar";
import Content from "./components/content/content";
import PetrPouch from "./pages/petrPouch/petrPouch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <TopBar className="topBar" />
        <div className="divider"></div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Content />} />
            <Route path="/pouch" exact element={<PetrPouch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
