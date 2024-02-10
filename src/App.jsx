import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Filter from "./components/filter";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Filter />
          <ProductList />
        </div>
      </Router>
    </Provider>
  );
}
