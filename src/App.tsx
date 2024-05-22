import Products from "./features/products/Products";
import "./App.css";
import logo from "./stackline_logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="16px"/>
      </header>
      <Products />
    </div>
  )
}

export default App
