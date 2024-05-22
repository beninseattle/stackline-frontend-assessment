import { Product } from "./features/products/Product";
import "./App.css";
import logo from "./stackline_logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Product />
    </div>
  )
}

export default App
