import { Routes, Route } from "react-router";

import ProductStateProvider from "@/stores";
import TopNav from "./components/topnav";
import Home from "@/views/home";
import Cart from "@/views/cart";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ProductStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopNav />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductStateProvider>
  );
}

export default App;
