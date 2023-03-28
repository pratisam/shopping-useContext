import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Context from "./context/Context";
import ReducerBasic from "./context/Reducer";
function App() {
  return (
    <div>
      <Context>
        <ReducerBasic>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>     
            </Router>
        </ReducerBasic>
      </Context>
    </div>
  );
}

export default App;
