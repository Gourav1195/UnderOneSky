import React, {useState} from 'react'
import './ShopStyle.css'
import  Item  from './ShopApi.js'
import ShopCard from './Cards'
import Bar from './Bar.jsx'

const uniqueList = [
    ...new Set(
        Item.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Shop = () => {
    const [ShopData, setShopData] = useState(Item);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
    if(category === 'All'){ 
        setShopData(Item);
        return;
    }

    const updatedList = Item.filter((curElem) =>{
        return curElem.category === category;
    });
    setShopData(updatedList);
 }
  return (
    <div>
        <Bar filterItem={filterItem} menuList={menuList} />
        <ShopCard ShopData={ShopData} />
    </div>
  )
}

export default Shop