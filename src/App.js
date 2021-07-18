import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Delivery } from "./components/Delivery";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";
import  Contact  from "./components/Contact";
import { Customer } from "./components/Customer";
import { NotFound } from './components/NotFound';
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
              <Customer/>
            </Route>
            <Route path="/3125-L8/product">
              <Product />
            </Route>
            <Route path="/3125-L8/delivery">
              <Delivery />
            </Route>
            <Route path="/3125-L8/faq">
              <Contact />
            </Route>
            <Route path="/3125-L8/help">
              <Homepage/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
