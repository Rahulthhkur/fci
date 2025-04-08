import AboutUsPage from "./about/layout"
import Footer from "./components/footer"
import LandingPage from "./components/landingpage"
import Navbar from "./components/navbar"

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
    <LandingPage/>
    </div>
  )
}

export default page