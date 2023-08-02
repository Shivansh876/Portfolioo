import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/common/Navbar";
import Home from "./Components/NavComponents/Home";
import About from "./Components/NavComponents/About";
import Projects from "./Components/NavComponents/Projects";
import Resume from "./Components/NavComponents/Resume";
import Footer from "./Components/common/Footer";

function App() {
  return (
    <div className="bg-richblack-900 min-h-screen bg-richblack-5 flex flex-col font-inter max-w-maxcontent ">
      <Navbar />

      <Routes>
        <Route
          path="/home"
          element= {<Home/>}
        />
        <Route
          path="/about"
          element= {<About/>}
        />
        <Route
          path="/projects"
          element= {<Projects/>}
        />
        <Route
          path="/resume"
          element= {<Resume/>}
        />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
