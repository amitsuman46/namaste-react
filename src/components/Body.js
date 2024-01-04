import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";
const Body = () => {

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();

    // console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  // const listOfRestaurants = [];  key={restaurant.data.id}
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }
    return listOfRestaurants.length===0 ? ( <Shimmer/> ) : (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >4)
            setListOfRestaurant(filteredList);
          }}>
            Top Rated Restaurants</button>
        </div>
       
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body