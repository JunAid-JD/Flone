import React from "react";
import item from './image/watch.png';


const SingleProduct = ({AddSingle,RemoveSingle,singleItem,onAdd,AddWish}) => {
  return (
    <>
    {
      singleItem.map((item)=>(
           <div className="singleproduct">
        <div className="productimg">
          <img src={item.image} alt="" />
        </div>
        <div className="productdetail">
          <p className="productname">{item.name}</p>
          <p className="productprice">${item.price}</p>
          <div className="stars product-star">
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
        </div>
          <p className="productabout">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure amet
            pariatur deserunt laboriosam dolor earum praesentium, officia
            consequuntur deleniti in sit nihil rerum fugiat odit ipsum ipsam
            voluptatibus minus doloribus.
          </p>
          <div className="ColorSize">
            <div className="color">
               <p>Color</p>
               <span className="white"></span>
               <span className="black"></span>
               <span className="red"></span>
            </div>
            <div className="size">
            <p>Size</p>
               <span>S</span>
               <span>M</span>
               <span>X</span>
               <span>XL</span>
            </div>
          </div>

          <div className="productaddtocart">
            <div className="inc-dec">
          <span  onClick={()=>AddSingle(item)}>+</span><span className='inc-dec-qty'>{item.qty}</span><span  onClick={()=>RemoveSingle(item)}>-</span>
          </div>
          <button className="SingleProductBtn" onClick={()=>onAdd(item)}>ADD TO CART</button>
          <div className="producticon">
            <i className="fa fa-heart-o"  onClick={()=>AddWish(item)}></i>
            <i className="fa fa-share"></i>
          </div>
          </div>

        </div>
      </div>
      ))
    }
    </>
  );
};

export default SingleProduct;
