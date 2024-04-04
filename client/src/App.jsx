import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./Context";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Instruction from "./components/Instruction";
import Templates from "./components/Templates";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResumeProvider>
          <nav className="sticky top-6">
            <Navbar />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="instruction" element={<Instruction />} />
            <Route path="templates" element={<Templates />} />
            <Route path="about" element={<About />} />
          </Routes>
        </ResumeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
