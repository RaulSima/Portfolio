import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/acceuil" element={} />
          <Route path="/not-found" element={} />
          <Route path="/" element={<Navigate replace to="/acceuil" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
