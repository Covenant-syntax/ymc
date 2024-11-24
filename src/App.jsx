import About from "./components/About"
import Buy from "./components/Buy"
import ComplaintChatbot from "./components/ComplaintsChatBot.jsx"
import CookieNotification from "./components/CookieConsent"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

function App() {
 

  return (
    <>
    <Nav />
    <Hero />
    <About />
    <Gallery />
    <Buy />
    <ComplaintChatbot />
    <Footer />
    <CookieNotification />
     
    </>
  )
}

export default App
