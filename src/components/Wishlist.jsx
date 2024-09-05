import React from 'react';
import { useNavigate} from 'react-router-dom';


const Wishlist = ({wishItems,ClearWish,DelWish,onAdd}) => {
const navigate= useNavigate();
  return (
    <>
    <div className="wishlistmain cartmain">
            <h2>You Wishlist Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>UNIT PRICE</th>
                        <th className='thead-addtocart'>ADD TO CART</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                  
                {wishItems.length === 0 && <div style={{textAlign:'center'}}>Wishlist is Empty</div>}

                    {
                        wishItems.map((item)=>(
                            <tr key={item.id}>
                            <td className='productimg'>
                               <img src={item.image} alt="card img" />
                            </td>
                            <td className='productname'>{item.name}</td>
                            <td className='productprice'>${item.price}</td>
                            <td className='productadd'><button className='wishlistmainbtn' onClick={()=>onAdd(item)} >Add To Cart</button></td>
                            <td className='productaction'><i className='fa fa-times' onClick={()=>DelWish(item)}></i></td>
                        </tr>
                        ))
                    }
                    

                   

                </tbody>
            </table>

            <div className="tablebtn">
                <button className='cartmainbtn'  onClick={()=> navigate('/')}>CONTINUE SHOPPING</button>
                <button className='cartmainbtn'  onClick={ClearWish}>CLEAR WISHLIST</button>
            </div>
        </div>
        </>
  )
}

export default Wishlist