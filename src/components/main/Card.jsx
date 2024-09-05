import React from 'react';
// import item from '../image/watch.png';

const Card = ({mainData,onAdd,AddWish,AddSingle}) => {
  return (
  <>
    {
        mainData.map((val)=>(
            <div className="cardbody" >
    <div className="cardimgouter">
    <div className="cardimginner">
        <img src={val.image} alt="card img" />
        <div className="addtocart">
            <span><i className='fa fa-heart-o'  onClick={()=> AddWish(val)}></i></span>
            <span className='addtocartmain'  onClick={()=> onAdd(val)}><i className='fa fa-shopping-cart'></i>Add To Cart</span>
            <span><i className='fa fa-eye' onClick={()=> AddSingle(val)}></i></span>
        </div>
        </div>
    </div>
    <div className="cardcontent">
        <p>{val.name}</p>
        <div className="stars">
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
            <i className='fa fa-star-o'></i>
        </div>
       <div className='price'> <span>${val.price}</span> </div>
    </div>
   </div>
        ))
    }

  </>
  )
}

export default Card
