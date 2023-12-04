import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Movies from './components/Movies';
import ImageSwiperItem from './components/ImageSwiperItem';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Movies/>
        <ImageSwiperItem />
      </div>
    </Router>
  );
}

export default App;
