import './App.css';
import { Router } from "@reach/router";
import { NewForm } from './pages/NewForm';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Router>
        <NewForm path="/projects/new" />
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
