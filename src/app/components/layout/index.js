import Header from '../header'
import Footer from '../footer'
import Banner from '../banner'
import BackgroundBox from '../backgroundBox'
 
export default function Layout({ children }) {
  return (
    <BackgroundBox>
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
    </BackgroundBox>
  )
}