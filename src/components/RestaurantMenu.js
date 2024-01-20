import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

// const [resInfo,setResInfo] = useState(null);

const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);

// useEffect(()=>{
//     fetchMenu();
// },[]);

// const fetchMenu = async() =>{
//     const data = await fetch(MENU_API+resId);
//     const json = await data.json();
//     setResInfo(json.data);
// }

if (resInfo === null) return <Shimmer/>
const {name, cuisines,cloudinaryImageId,costForTwoMessage,sla} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
// console.log(itemCards);
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
console.log(categories);
  return  (
    <div className="menu text-center">
      <h1 className="font-bold my-5">{name}</h1>
      <h3 className="font-bold mx-3">{cuisines.join(",")} - {costForTwoMessage} - {sla.deliveryTime} Mins</h3>
     {/*Categories Accordian */     }
     {
      categories.map((category)=><RestaurantCategory key={category.card.card.title} data={category.card.card}/>)
     }
    </div>
  );
};

export default RestaurantMenu;
