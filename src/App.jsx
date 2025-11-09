import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Market from './pages/Market';
import Traction from './pages/Traction';
import BusinessModel from './pages/BusinessModel';
import Team from './pages/Team';
import Milestones from './pages/Milestones';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/market" element={<Market />} />
              <Route path="/traction" element={<Traction />} />
              <Route path="/business-model" element={<BusinessModel />} />
              <Route path="/team" element={<Team />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
