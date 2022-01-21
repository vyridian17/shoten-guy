import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to Shoten-Guy!</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
