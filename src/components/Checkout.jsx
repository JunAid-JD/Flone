import React from 'react';

const Checkout = ({cartItems}) => {
  const itemsPrice = cartItems.reduce((a,c)=>a + c.price * c.qty, 0);
  return (
    <>
    <div className="checkout">
        <div className="billing-detail">
          <h2>Billing Details</h2>
          <form >
            <div className="name">
                <div className='name-indiv'>
                <label >First Name</label>
                <input type="text" />
                </div>
                <div className='name-indiv'> 
                <label >Last Name</label>
                <input type="text"/>
                </div>
            </div>

            <label >Company Name</label>
            <input type="text" />

            <label htmlFor="">Country</label>
            <input type="text" placeholder='Select a country' />

           <label htmlFor="">Street Address</label>
           <input type="text" name="" id="" placeholder='House number and Street name'/>
           <input type="text"  placeholder='Apartment,suite,unit etc'/>

           <label htmlFor="">Town / City</label>
           <input type="text" name="" id="" />

           <div className="name zip">
            <div className='name-indiv'>
            <label htmlFor="">State / Country</label>
            <input type="text" name="" id="" placeholder=''/>
            </div>
            <div className='name-indiv'>
            <label htmlFor="">Postcode / ZIP</label>
            <input type="text" name="" id="" placeholder=''/>
           </div>
           </div>

           <div className="name email">
           <div className='name-indiv'>
           <label htmlFor="">Phone</label>
            <input type="text" name="" id="" placeholder='+92'/>
            </div>
            <div className='name-indiv'>
            <label htmlFor="">Email Adress</label>
            <input type="email" name="" id="" placeholder='abc@gmail.com'/>
           </div>
           </div>
                
            <div className="additional-info">   
           <h3>Additional Information</h3>
           <p>Order Notes</p>
           <textarea name="" id="" cols="30" rows="5" placeholder='Notes about your order e.g special note for delivery'>
           </textarea>
           </div> 
          </form>
        </div>
        <div className="order">
         <h2>Your Order</h2>
         <div className="order-container">
           <div className="order-header">
            <p style={{fontWeight:500}}>Product</p>
            <p style={{fontWeight:500}}>Total</p>
           </div>



          {
            cartItems.map((val)=>(
              <div className="order-product">
              <div className="order-item">
               <p>{val.name} x {val.qty}</p>
               <p>${val.price.toFixed(2) * val.qty}</p>
               </div>
             </div>
            ))
          }
        


          <div className="order-header">
            <p>Shipping</p>
            <p>Free Shipping</p>
           </div>

          <div className="order-header order-total">
            <p style={{fontWeight:500}}>Total</p>
            <p className='total-price' style={{fontWeight:500}}>${itemsPrice.toFixed(2)}</p>
           </div>
          
         </div>
         <button className='checkoutbtn' onClick={()=>alert('Order Placed Successfully')}>PLACE ORDER</button>
        </div>
    </div>
    </>
  )
}

export default Checkout