import { I18nProvider } from './i18n/I18nContext';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}

export default App;
