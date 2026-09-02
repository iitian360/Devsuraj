import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Feature from '../components/feature/Featur';
import Project from '../components/Project/Project';
import Resume from '../components/Resume/Resume';

export const HomePage = () => (
  <>
    <Banner />
    <About />
  </>
);

export const FeaturesPage = () => <Feature />;
export const ProjectsPage = () => <Project />;
export const ResumePage = () => <Resume />;
export const ContactPage = () => <Contact />;
