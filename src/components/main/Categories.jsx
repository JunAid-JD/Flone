import React from 'react'

const Categories = ({filterItem,menuList}) => {
  return (
    <>
    <div className='sidebar'>


      <div className="search-div">
        <p>Search</p>
        <div className='search'>
           <input type="text" placeholder='Search Here....'/>
           <i className="fa fa-search"></i>
        </div>
      </div>

     <div className="categories-div">
      <p>Categories</p>
      <div className="categories">

      {
            menuList.map((val)=>{
                return  <div><i className="fa fa-square-o" onClick={()=>filterItem(val)} /><span>{val}</span></div>
            })
          }
      
      
      {/* <div><input type="checkbox" /><span>Fashion</span></div>
      <div><input type="checkbox" /><span>Women</span></div> */}
      {/* <div><input type="checkbox" /><span>Men</span></div> */}
      {/* <div><input type="checkbox" /><span>Electronic</span></div>
      <div><input type="checkbox" /><span>Furniture</span></div> */}
      {/* <div><input type="checkbox" /><span>Plant</span></div>
      <div><input type="checkbox" /><span>Organic Food</span></div>
      <div><input type="checkbox" /><span>Flower</span></div> */}
      {/* <div><input type="checkbox" /><span>Books</span></div> */}
      {/* <div><input type="checkbox" /><span>Cosmetics</span></div> */}
      {/* <div><input type="checkbox" /><span>Accessories</span></div>
      <div><input type="checkbox" /><span>Handmade</span></div>
      <div><input type="checkbox" /><span>Kids</span></div> */}
       {/*<div><input type="checkbox" /><span>Cakes</span></div>
      <div><input type="checkbox" /><span>Pet Food</span></div>
      <div><input type="checkbox" /><span>Medical</span></div> */}
      </div>
     </div>


     <div className="categories-div">
      <p>Color</p>
      <div className="categories">
      <div><i className="fa fa-square-o"></i> <span>All Color</span></div>
      <div><i className="fa fa-square-o"></i> <span>Black</span></div>
      <div><i className="fa fa-square-o"></i> <span>White</span></div>
      <div><i className="fa fa-square-o"></i> <span>Red</span></div>
      <div><i className="fa fa-square-o"></i> <span>Blue</span></div>
      </div>
     </div>


     <div className="categories-div">
      <p>Size</p>
      <div className="categories">
      <div><i className="fa fa-square-o"></i> <span>All Sizes</span></div>
      <div><i className="fa fa-square-o"></i> <span>S</span></div>
      <div><i className="fa fa-square-o"></i> <span>M</span></div>
      <div><i className="fa fa-square-o"></i> <span>X</span></div>
      <div><i className="fa fa-square-o"></i> <span>XL</span></div>
      </div>
     </div>


     <div className="categories-div">
      <p>Tags</p>
      <div className="tag">
      <div><span>Fashion</span><span>Women</span></div>
      <div><span>Jacket</span><span>Men</span></div>
      <div><span>Full Sleeves</span><span>Coat</span></div>
      <div><span>Top</span><span>Sleeveless</span></div>
      <div><span>Electronic</span><span>Furniture</span></div>
      <div><span>Organic Food</span><span>Plant</span></div>
      <div><span>Books</span><span>Flower</span></div>
      <div><span>Accessories</span><span>Plant</span></div>
      <div><span>Handmade</span><span>Kids</span></div>
      <div><span>Medical</span><span>Auto Parts</span></div>
      <div><span>Cakes</span><span>Pet Food</span></div>
      <div><span>T-Shirts</span><span>Hoody</span></div>
      </div>
     </div>


    </div>
    </>
  )
}

export default Categories
