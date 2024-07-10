import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import { SingleProjectProvider } from './context/SingleProjectContext'; // Import your context provider

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
  return (
    <SingleProjectProvider> {/* Wrap your entire application with the context provider */}
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Router>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/single-project/:id" element={<ProjectSingle />} /> {/* Ensure the route includes the ID parameter */}
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Suspense>
            {/* <AppFooter /> */}
          </Router>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </SingleProjectProvider>
  );
}

export default App;
