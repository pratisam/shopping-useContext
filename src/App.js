import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
     <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
