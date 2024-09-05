import React, { useState } from "react";
import HeadContact from "./components/HeadContact";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import data from './data';
import SingleProduct from "./components/SingleProduct";

const uniqueList = ["All Categories", ...new Set(data.map((val) => val.category))];


const App = () => {
  const [mainData, setMainData] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  const navigate = useNavigate();

  // Filter category // 

  const filterItem = (category) => {
    if (category === "All Categories") {
      setMainData(data);
      return;
    }
    const updatedList = data.filter((val) => {
      return val.category === category;
    })
    setMainData(updatedList);
  };




  // Cartlist //
  const onAdd = (val) => {
    console.log('clicked add to cart');
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else {
      setCartItems([...cartItems, { ...val, qty: 1 }]);
    }
  };

  const onRemove = (val) => {
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist.qty === 0) {
      setCartItems(cartItems);
    }
    else {
      setCartItems(
        cartItems.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (val) => {
    setCartItems(cartItems.filter((x) => x.id !== val.id));
  };

  const ClearCart = () => {
    setCartItems([]);
  }

  // Wishlist //
  const AddWish = (val) => {
    console.log('clicked add to cart');
    const exist = wishItems.find((x) => x.id === val.id);
    if (exist) {
      setWishItems(
        wishItems.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else {
      setWishItems([...wishItems, { ...val, qty: 1 }]);
    }
  };
  const DelWish = (val) => {
    setWishItems(wishItems.filter((x) => x.id !== val.id));
  };
  const ClearWish = () => {
    setWishItems([]);
  }


  // single product //
  const AddSingle = (val) => {
    const exist = singleItem.find((x) => x.id === val.id);
    if (exist) {
      setSingleItem(
        singleItem.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else {
      setSingleItem([...singleItem, { ...val, qty: 1 }]);
    };
    navigate('/singleproduct');
  };

  const RemoveSingle = (val) => {
    const exist = singleItem.find((x) => x.id === val.id);
    if (exist.qty === 0) {
      setSingleItem(singleItem);
    }
    else {
      setSingleItem(
        singleItem.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <>
      <HeadContact />
      <Header cartcount={cartItems.length} wishcount={wishItems.length} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Main mainData={mainData} onAdd={onAdd} AddWish={AddWish} AddSingle={AddSingle} uniqueList={uniqueList} filterItem={filterItem} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} cartItems={cartItems} ClearCart={ClearCart} />} />
        <Route path="/wishlist" element={<Wishlist wishItems={wishItems} onAdd={onAdd} DelWish={DelWish} ClearWish={ClearWish} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singleproduct" element={<SingleProduct singleItem={singleItem} AddSingle={AddSingle} RemoveSingle={RemoveSingle} onAdd={onAdd} AddWish={AddWish} />} />
      </Routes>
      <Footer />

    </>
  );
};

export default App;
