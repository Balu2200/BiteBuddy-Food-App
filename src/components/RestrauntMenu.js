import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";


const Restrauntmenu = () => {

    const { resId } = useParams();
    const menuList = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);

    if (menuList == null) return <Shimmer />;

    const { name, cuisines, avgRating, costForTwo, city, imageId} = menuList.cards[2].card.card.info;
    

    const categories = menuList.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c =>c.card?.card?.["@type"]=== 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    );

    return (
        <div className="menu p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-600">Average Rating: {avgRating} ⭐</p>
            <p className="text-gray-600">{cuisines.join(", ")} • {city}</p>
            <p className="text-gray-600">Cost for Two: ₹{costForTwo / 100}</p>

            {categories.map((category, index)=>(
                <RestaurantCategory 
                  key={category?.card?.card?.title}  
                  data ={category?.card?.card} 
                  showItems = {index === showIndex && true}
                  setshowIndex = {() => setshowIndex(index)}
                />
            ))}
             
        </div>
    );
};

export default Restrauntmenu;
