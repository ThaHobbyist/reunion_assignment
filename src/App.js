import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from "./pages/Rent"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rent />} /> 
      </Routes>
    </Router>
  );
}

export default App;
