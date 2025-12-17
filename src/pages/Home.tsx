import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Services />
      <ContactForm />
    </>
  );
}
