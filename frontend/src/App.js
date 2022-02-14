import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import CartScreen from "./views/CartScreen";
import LoginScreen from "./views/LoginScreen";

import "./bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/" element={<HomeView />} />
            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/cart/">
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />}/>
            </Route>
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
