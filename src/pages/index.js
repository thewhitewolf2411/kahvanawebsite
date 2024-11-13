import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import AppreciationBox from "../app/components/appretiationBox"
import ContactForm from "../app/components/contact"
import HomeBgImage from "../app/components/homeBgImage"
import Services from "../app/components/services"
import Testimonials from "../app/components/testamonials"
import WhyChooseUsSection from "../app/components/whyChooseUs"

export default function Home() {
  const contactRef = useRef(null);
  const router = useRouter();

  const scrollToRef = (ref) => {
    const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // duration in ms
    let start = null;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percentage);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (router.asPath.includes('#contact') && contactRef.current) {
      // Smooth scroll to the contact form
      scrollToRef(contactRef);
      
      // Remove #contact from the URL without reloading the page
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router.asPath]);

  return (
    <>
      <HomeBgImage />
      <WhyChooseUsSection />
      <Testimonials />
      <Services />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <AppreciationBox />
    </>
  )
  }