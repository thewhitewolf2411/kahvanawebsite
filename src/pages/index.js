import AppreciationBox from "../app/components/appretiationBox"
import ContactForm from "../app/components/contact"
import HomeBgImage from "../app/components/homeBgImage"
import Services from "../app/components/services"
import Testimonials from "../app/components/testamonials"
import WhyChooseUsSection from "../app/components/whyChooseUs"

export default function Home() {
    return (
      <>
        <HomeBgImage />
        <WhyChooseUsSection />
        <Testimonials />
        <Services />
        <ContactForm />
        <AppreciationBox />
      </>
    )
  }