import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  // const cloudinaryImageId = resData.info.cloudinaryImageId;
  // const name = resData.info.name;
  // const avgRating = resData.info.avgRating;
  // const cuisines = resData.info.cuisines;
  // const costForTwo = resData.info.costForTwo;
  // const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400 h-[400px]">
      <img
        className="res-logo rounded-lg w-[100vw] h-[150px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
