import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import ProductList from "./Features/productList/ProductList";
import CartModal from './Features/cart/CartModal';

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  return (
    <>
      {isOpenModalCart ? <CartModal handleHideModalCart={handleHideModalCart} /> : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList />
      </main>
    </>
  );
}

export default App;
