import './App.css'
import Banner from './components/Banner/Banner'
import Contactform from './components/Contactform/Contactform'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import Footerbottom from './components/Footerbottom/Footerbottom'
import Mapcontact from './components/Mapcontact/Mapcontact'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'
import Playback from './components/Playback/Playback'
import Services from './components/Services/Services'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
        <Navbar />
        <Banner />
        <Services />
        <Counter />
        <Playback />
        <Testimonial />
        <Contactform />
        <Mapcontact />
        <Newsletter />
        <Footer />
        <Footerbottom />
    </>
  )
}

export default App
