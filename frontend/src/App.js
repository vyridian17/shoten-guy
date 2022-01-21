import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";

import "./bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeView />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
