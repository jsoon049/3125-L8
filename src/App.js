import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Customer } from "./components/Customer";
import { Product } from "./components/Product";
import { Delivery } from "./components/Delivery";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";
import "./App.css";
import { GlobalProvider } from "./components/GlobalState";

function App() {
  return (
    <div className="appContainer" id="appContainer">
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/3125-L8/">
              <Homepage/>
            </Route>
            <Route path="/3125-L8/product">
              <Product />
            </Route>
            <Route path="/3125-L8/delivery">
              <Delivery />
            </Route>
            <Route path="/3125-L8/faq">
              <Customer />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
