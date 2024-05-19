import Navbar from "./Navbar.jsx"
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    
  <>
   <Navbar />
   <div className="container">
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
   </div>
   
  </>
     
    
  )
}

export default App
