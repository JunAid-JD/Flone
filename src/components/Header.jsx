import React,{useState} from 'react';
import logo from "./image/logo.png";
import item from './image/watch.png';
import banner from './image/banner.png';
import { useNavigate, Link } from 'react-router-dom';

//  const opensidecart=document.getElementById("sidebar");
//   let displaycart = opensidecart.style.visibility;
//    if(displaycart === 'hidden'){
//     displaycart = 'visible';
//    }
//    else{
//     displaycart = 'hidden';
//    }
 // navigate('/cart');
    // opensidecart();

const Header = ({cartcount,wishcount,onDelete,cartItems}) => {
  const itemsPrice = cartItems.reduce((a,c)=>a + c.price * c.qty, 0);
    const [cartTouched, setCartTouched] = useState(false);
    // let navRef = useRef();
//    const navigate=useNavigate();
   const opensidebar=()=>{
    setCartTouched((prev)=>!prev);
   }
  return (
    <>
    <header>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <ul>

            <li className='dropdownli'><a href="/" >Home <i className='fa fa-angle-down'></i></a>
             <ul>
                 <li className='li1'><a href="/">Home Group 1</a></li>
                 <li><a href="/">Home Fashion</a></li>
                 <li><a href="/">Home Cosmetics</a></li>
                 <li><a href="/">Home Furniture</a></li>
                 <li><a href="/">Home Plants</a></li>
                 <li><a href="/">Home Flower</a></li>
                 <li><a href="/">Home Book</a></li>
            </ul>
            <ul className='homegroup2'>
                 <li className='li1'><a href="/">Home Group 2</a></li>
                 <li><a href="/">Home Electronics</a></li>
                 <li><a href="/">Home Autoparts</a></li>
                 <li><a href="/">Home Food</a></li>
                 <li><a href="/">Home Cake</a></li>
                 <li><a href="/">Home Handmade</a></li>
                 <li><a href="/">Home Cake</a></li>
            </ul>
            <ul className='homegroup3'>
                 <li className='li1'><a href="/">Home Group 3</a></li>
                 <li><a href="/">Home Cake</a></li>
                 <li><a href="/">Home Handmade</a></li>
                 <li><a href="/">Home Electronics</a></li>
                 <li><a href="/">Home Autoparts</a></li>
                 <li><a href="/">Home Food</a></li>
                 <li><a href="/">Home Cake</a></li>
            </ul>

                </li>

               <li className='shop dropdownli'><a href="/" >Shop <i className='fa fa-angle-down'></i></a>
                <ul>
                 <li className='li1'><a href="/">Shop Layout</a></li>
                 <li><a href="/">Shop Standard</a></li>
                 <li><a href="/">Shop Filter</a></li>
                 <li><a href="/">Shop Column</a></li>
                 <li><a href="/">Shop Sidebar</a></li>
                 <li><a href="/">Shop Full Width</a></li>
                 <li><a href="/">Shop Row</a></li>
            </ul>
            <ul className='homegroup2'>
                 <li className='li1'><a href="/">Product Detail</a></li>
                 <li><a href="/">Product Button</a></li>
                 <li><a href="/">Product Right</a></li>
                 <li><a href="/">Product Left</a></li>
                 <li><a href="/">Product Sticky</a></li>
                 <li><a href="/">Product Slider</a></li>
                 <li><a href="/">Product Image</a></li>
            </ul>
            <ul className='homegroup3'>
               <img src={banner} alt="banner" />
            </ul>
                </li>

                <li><a href="/" >Collection </a></li>
                <li className='pages  dropdownli'><a href="/" >Pages <i className='fa fa-angle-down'></i></a>
                <ul>
                 <li ><a href="/">Cart</a></li>
                 <li><a href="/">Checkout</a></li>
                 <li><a href="/">Wishlist</a></li>
                 <li><a href="/">Compare</a></li>
                 <li><a href="/">My Account</a></li>
                 <li><a href="/">About Us</a></li>
                 <li><a href="/">Contact Us</a></li>
            </ul>
                </li>
                <li className='blog dropdownli'><a href="/" >Blog <i className='fa fa-angle-down'></i></a>
                <ul>
                 <li ><a href="/">Blog Standard</a></li>
                 <li><a href="/">Blog Sidebar</a></li>
                 <li><a href="/">Blog Detail</a></li>
                 <li><a href="/">Blog Slider</a></li>
            </ul>
                </li>
                <li><a href="/" >Contact Us </a></li>
            </ul>
        </nav>
        <div className="icons">
        <i className="fa fa-search"></i>
        <i className="fa fa-share"></i>
        <Link to="/login"><i className="fa fa-user-circle-o" ></i></Link>
        <Link to="/wishlist"><i className="fa fa-heart-o" ><span className="count">{wishcount}</span></i></Link>
        <i className="fa fa-shopping-bag"  onClick={opensidebar}><span className="count">{cartcount}</span></i>
      
      
        {cartTouched && <div className="cartsidebar" id='sidebar'>
            {
                cartItems.map((val)=>(
                    <div className="cartsidebaritem">
                    <div className="cartsidebarimgouter">
                     <div className="cardsidebarimginner">
                       <img src={val.image} alt="card img" />
                     </div>
                    </div>
                    <div className="cartsidebaritemdetail">
                     <div  className='cartsidebaritemname'><p>{val.name}<i className='fa fa-times' onClick={()=>onDelete(val)}></i></p></div>
                     <p className='cartsidebaritemqty'>Qty: {val.qty}</p>
                     <p className='cartsidebaritemprice'>${val.price}</p>
                    </div>
                </div>
                ))
            }
           


            {/* <div className="cartsidebaritem">
                <div className="cartsidebarimgouter">
                 <div className="cardsidebarimginner">
                   <img src={item} alt="card img" />
                 </div>
                </div>
                <div className="cartsidebaritemdetail">
                 <div  className='cartsidebaritemname'><p>Lorem ipsum coat <i className='fa fa-times'></i></p></div>
                 <p className='cartsidebaritemqty'>Qty: 1</p>
                 <p className='cartsidebaritemprice'>$11.5</p>
                </div>
            </div> */}
          
           <div className="cartsidebartotal">
            <p>Total:</p> <p>${itemsPrice.toFixed(2)}</p>
           </div>
           <Link to="/cart"><div className="cartsidebarbtn">VIEW CART</div></Link>
           <Link to="/checkout"> <div className="cartsidebarbtn">CHECKOUT</div></Link>
        </div>}
        </div>
    </header>
    <div className="current">
        <span>Home</span><p>/</p><span>Shop</span> 
        </div>
    </>
  )
}

export default Header
