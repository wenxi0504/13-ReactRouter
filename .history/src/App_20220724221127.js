import { Router } from "react-router-dom";

import Welcome from "./components/Welcome";
import Products from "./components/Products";
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
