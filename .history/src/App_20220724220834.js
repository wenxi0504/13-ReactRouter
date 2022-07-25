import { Router } from "react-router-dom";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <Router path="/welcome">
        <Welcome />
      </Router>
    </div>
  );
}

export default App;
