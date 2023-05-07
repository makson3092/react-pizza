import React from "react";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

// const Loadind = () => {
//   return (
//     <>
//       <p>загрузка</p>
//       <Load />
//     </>
//   );
// };
function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* {isLoading && <Loadind />} */}
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* {false ? <Home /> : <NotFound />} */}
        </div>
      </div>
    </div>
  );
}

export default App;
