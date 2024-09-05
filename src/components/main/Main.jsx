import React from 'react';
import Cards from './Cards';
import Categories from './Categories';
// import data from '../../data';

// const uniqueList = [
//     ...new Set(data.map((val)=>{
//     return val.category;
//      })
//      ),"All Categories",
//    ];
//    console.log(uniqueList);

const Main = ({mainData,onAdd,AddWish,AddSingle,uniqueList,filterItem}) => {
 
      return (
    <div className='Main'>
        <Categories filterItem={filterItem} menuList={uniqueList}/>
        <Cards mainData={mainData} onAdd={onAdd} AddWish={AddWish} AddSingle={AddSingle} />
        </div>
  )
}

export default Main