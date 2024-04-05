import './App.css'
import About from './Container/About/About'
import Achievements from './Container/Achievements/Achievements'
import Destination from './Container/Destination/Destination'
import MainFeat from './Container/Featured/MainFeat'
import News from './Container/News/News'
import Fstcaroudel from './components/FirstCarousel/Fstcaroudel'
import Btmftr from './components/Fotter/Btmftr/Btmftr'
import Footer from './components/Fotter/Footer'
import Navbar from './components/Navbar/Navbar'
import Topnavbar from './components/Topnavbar/Topnavbar'

function App() {
  return (
    <>
      <div className="main_design">
        <Topnavbar />
        <Navbar />
          <div className="main_inner_cnt">
            <Fstcaroudel />
            <About />
            <MainFeat />
            <Destination />
            <Achievements />
            <News />
          </div>
        <Footer />
        <Btmftr />
      </div>
    </>
  )
}

export default App
