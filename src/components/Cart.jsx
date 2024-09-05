import React from 'react';
import { useNavigate } from 'react-router-dom';
// import item from './image/watch.png';


const Cart = ({cartItems,onAdd,onRemove,onDelete,ClearCart}) => {
const navigate= useNavigate();
    const itemsPrice = cartItems.reduce((a,c)=>a + c.price * c.qty, 0);
    // const taxPrice = itemsPrice * 0.05;
    // const totalPrice = itemsPrice + taxPrice; 
  return (
    <>
    <div className="cart">
        <div className="cartmain">
            <h2>You Cart Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>UNIT PRICE</th>
                        <th className='thead-qty'>QTY</th>
                        <th>SUBTOTAL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>

                {cartItems.length === 0 && <div style={{textAlign:'center'}}>Cart is Empty</div>}
                    {cartItems.map((item)=>(
                       <tr key={item.id}>
                        <td className='productimg'>
                           <img src={item.image} alt="card img" />
                        </td>
                        <td className='productname'>{item.name}</td>
                        <td className='productprice'>${item.price.toFixed(2)}</td>
                        <td className='productqty'>
                            <span  onClick={()=>onAdd(item)}>+</span><span className='itemqty'>{item.qty}</span><span  onClick={()=>onRemove(item)}>-</span>
                            </td>
                        <td className='producttotal'>${item.price * item.qty}</td>
                        <td className='productaction'><i className='fa fa-times' onClick={()=>onDelete(item)}></i></td>
                    </tr>

                     ))}
                    









                    {/* <tr>
                        <td className='productimg'>
                           <img src={item} alt="card img" />
                        </td>
                        <td className='productname'>Lorem ipsum Coat</td>
                        <td className='productprice'>$15.5</td>
                        <td className='productqty'>
                            <span>+</span><span className='itemqty'>1</span><span>-</span>
                            </td>
                        <td className='producttotal'>$15.5</td>
                        <td className='productaction'><i className='fa fa-times'></i></td>
                    </tr> */}

                </tbody>
            </table>

            <div className="tablebtn">
                <button className='cartmainbtn'  onClick={()=> navigate('/')}>CONTINUE SHOPPING</button>
                <button className='cartmainbtn'  onClick={ClearCart}>CLEAR SHOPPING CART</button>
            </div>
        </div>


          <div className="cartforms">
            <div className="cartformcard ">
                <h3>Estimate Shopping and Tax</h3>
                <form className='cartform'>
                <p>Enter your destination to get a shipping <br/> estimate</p>
                <label >Country</label>
                <input type="text" placeholder='Canada'/>
                <label htmlFor="">Region/State</label>
                <input type="text"  placeholder='Toronto'/>
                <label htmlFor="">ZIP/Postalcode</label>
                <input type="text"  placeholder=''/>
                <button className='cartformbtn'>GET A QUOTE</button>
                </form>
            </div>

            <div className="cartformcard ">
                <h3>Use Coupon Code</h3>
                <form className='cartform'>
                {/* <p>Enter your coupon code if you have one</p> */}
                <label >Enter your coupon code if you have one</label>
                <input type="text" placeholder=''/>
                <button className='cartformbtn'>APPLY COUPON</button>
                </form>
            </div>


            <div className="cartformcard ">
                <h3>Cart Total</h3>
                <div className="cartformtotal">
                    <p>Total Products</p>
                    <p>${itemsPrice.toFixed(2)}</p>
                </div>
                <div className="cartformtotal grandtotal">
                    <p>Grand Total</p>
                    <p>${itemsPrice.toFixed(2)}</p>
                </div>
                <button className='cartformbtn' onClick={()=>navigate('/checkout')}>PROCEED TO CHECKOUT</button>
            </div>

          </div>

    </div>
    </>
  )
}

export default Cart