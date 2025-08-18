import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VisitNepalPage from './pages/VisitNepalPage';
import GoOverseasPage from './pages/GoOverseasPage';
import SpecialPackagesPage from './pages/SpecialPackagesPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ChatBox from './components/Chatbox';
import ContactPage from './pages/Contact';
import India from './overseas/India';
import Vietnam from './overseas/Vietnam';
import Thailand from './overseas/Thailand';
import Malaysia from './overseas/Malaysia';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <ChatBox/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visit-nepal" element={<VisitNepalPage />} />
            <Route path="/go-overseas" element={<GoOverseasPage />} />
            <Route path="/special-packages" element={<SpecialPackagesPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/contact" element={<ContactPage/>}/>
       <Route path="/overseas/India" element={<India />} />
       <Route path="/overseas/Vietnam" element={<Vietnam />} />
       <Route path="/overseas/Thailand" element={<Thailand />} />
       <Route path="/overseas/Malaysia" element={<Malaysia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;