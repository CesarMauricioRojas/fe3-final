import { Card } from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

// probando cuenta git

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Navbar/>
          <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/users/:id" element={<Detail />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
