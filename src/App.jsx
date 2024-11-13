import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import Playback from './components/Playback/Playback'
import Reactslick from './components/Reactslick/Reactslick'
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
    </>
  )
}

export default App
