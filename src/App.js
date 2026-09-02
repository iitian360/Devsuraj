import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import {
  ContactPage,
  FeaturesPage,
  HomePage,
  ProjectsPage,
  ResumePage,
} from './pages/PortfolioPages';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-full overflow-x-clip h-auto bg-bodyColor text-lightText px-4">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
