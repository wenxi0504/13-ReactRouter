import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
