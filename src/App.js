import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Header />

      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
