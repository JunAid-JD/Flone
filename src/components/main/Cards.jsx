import React from 'react';
// import AppsIcon from '@mui/icons-material/Apps';
import Card from './Card';

// import {FaGithub} from 'react-icons/fa';

const Cards = ({mainData,onAdd,AddWish,AddSingle}) => {
  return (
   <>
   <div className='cardsection'>
    <div className="cardheader">
    <div className="cardselector">
    <select placeholder='Default ...'>
      <option value="Default">Default</option>
      <option value="All Categories">All Categories</option>
      <option value="Low to High">Low to High</option>
      <option value="High to Low">High to Low</option>
      </select>
      </div>

      <div className="cardtext">
      <p>Showing 15 of 144 Result</p>
      </div>

       <div className="cardicon">
       <i className='fa fa-th-large'></i>
       <i className='fa fa-th'></i>
       <i className='fa fa-list-ul'></i>
      
        {/* <AppsIcon/> */}

       </div>
   </div>

     <div className="cards">
              <Card  
              mainData={mainData}
              onAdd={onAdd}
              AddWish={AddWish}
              AddSingle={AddSingle}
              />
              {/* // name={val.name}
              // image={val.image}
              // price={val.price} */}
             
     </div>


      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span><i className='fa fa-angle-right'></i><i className='fa fa-angle-right'></i></span>
        <span>10</span>
      </div>

    </div>
   </>
  )
}

export default Cards
