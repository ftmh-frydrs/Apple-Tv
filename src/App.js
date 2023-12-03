import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
      </div>
    </Router>
  );
}

export default App;
