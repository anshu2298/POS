import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
      </Routes>
    </Router>
  );
};

export default App;
