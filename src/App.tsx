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
          <Route path="/Portfolio/home" element={<Acceuil />} />
          <Route
            path="/Portfolio/"
            element={<Navigate replace to="/Portfolio/home" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
