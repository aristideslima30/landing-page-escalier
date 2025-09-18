import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;