import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Tournament from './components/Tournament';
import Matches from './components/Matches';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot/Chatbot'; // Novo componente
import useFuriaAnimations from './hooks/useFuriaAnimations';

export default function App() {
  useFuriaAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Tournament />
        <Matches />
      </main>
      <Footer />
      <Chatbot /> {/* Chatbot fixo no canto */}
    </>
  );
}