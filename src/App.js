import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { WeddingPhotos } from './pages/Sub-pages/WeddingPhotos';
import BabyPhotos from './pages/Sub-pages/BabyPhotos'
import MaternityPhotos from './pages/Sub-pages/MaternityPhotos';
import PreWeddingPhotos from './pages/Sub-pages/PreWeddingPhotos';
import WeddingVideos from './pages/Sub-pages/WeddingVideo';
import BabyVideos from './pages/Sub-pages/BabyVideos';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/wedding" element={<WeddingPhotos />} />
            <Route path="/portfolio/baby" element={<BabyPhotos />} />
            <Route path="/portfolio/maternity" element={<MaternityPhotos />} />
            <Route path="/portfolio/pre-wedding" element={<PreWeddingPhotos />} />
            <Route path="/videos/wedding-video" element={<WeddingVideos />} />
            <Route path="/videos/baby-video" element={<BabyVideos />} />
            {/* <Route path="/videos" element={<Videos />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer/>
    </Router>
  );
}

export default App;
