import './App.css'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ThumbnailSlider from './components/ThumbnailSlider'
import EventsSidebar from './components/EventsSidebar'
import NewsCards from './components/NewsCards'
import ZigZagSection from './components/ZigZagSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import patternBg from './assets/pattern-bg.png';

function App() {
   const footerStyle = {
      backgroundImage: `url(${patternBg})`,
    paddingInline:"10%",
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto',
      backgroundBlendMode: 'multiply',
    };
  return (
    <div className="app" >
      <AnnouncementBar />
      <Header />
      <HeroSection />
    <div style={{backgroundColor:"#053024",}}>
      <div style={footerStyle}>
        <div className="content-with-sidebar">
          <div className="main-content">
            <ThumbnailSlider />
            <NewsCards />
          </div>
          <EventsSidebar />
        </div>
      </div>
    </div>
      <ZigZagSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
