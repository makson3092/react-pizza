import React from "react";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

export const AppContext = React.createContext();

function App() {
  const [searchValue, setsearchValue] = React.useState("");
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setsearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
