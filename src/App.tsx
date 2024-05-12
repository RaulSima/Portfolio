import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import Acceuil from "./components/acceuil";

function App() {
  return (
    <div className="body">
      <div className="header">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/accueil" element={<Acceuil />} />
          <Route path="/not-found" element={<Acceuil />} />
          <Route path="/" element={<Navigate replace to="/accueil" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
