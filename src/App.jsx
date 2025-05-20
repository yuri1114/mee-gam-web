import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductAllPage from "./page/ProductAllPage";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";
import CartPage from "./page/CartPage";
import MypageNav from "./component/MypageNav";
import "./styles/global.scss";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();

  const hideNavbar = ["/cart", "/login"].includes(location.pathname);

  return (
    <div className="App">
      <MypageNav
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<ProductAllPage />}></Route>
        <Route path="/products" element={<ProductAllPage />}></Route>

        <Route
          path="/login"
          element={<LoginPage setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
