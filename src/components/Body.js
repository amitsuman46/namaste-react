import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const { setUserName, loggedInUser } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9505636&lng=77.7162129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  // const listOfRestaurants = [];  key={restaurant.data.id}
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            data-testid = "searchInput"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-2 py-2 bg-green-200 m-4 rounded-2xl border border-solid"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredList);
              setFilterRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 ">
          <button
            className="filter-btn px-2 py-2 bg-gray-200 m-4 rounded-2xl border border-solid hover:bg-gray-400"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" m-4 p-4 ">
          <label>User Name</label>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            value={ loggedInUser }
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
