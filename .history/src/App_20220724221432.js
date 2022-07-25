import { Router } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
function App() {
  return (
    <div>
      <Router path="/welcome">
        <Welcome />
      </Router>
      <Router path="/Products">
        <Products />
      </Router>
    </div>
  );
}

export default App;
