import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import Acceuil from "./components/acceuil";
import Projects from "./components/projects";
import Resume from "./components/resume";

function App() {
  return (
    <div className="body">
      <div className="header">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Acceuil />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
