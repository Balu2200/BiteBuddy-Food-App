import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const resData = props.resData;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData.info; 

    return (
        <div
            className="m-3 p-3 w-[250px] h-[350px] rounded-xl shadow-xl flex flex-col justify-between hover:bg-gray-200 transition-all duration-300"
            style={{ backgroundColor: "#f0f0f0" }}
        >
            <img
                className="res-logo w-full h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h4 className="font-semibold text-lg">{name}</h4>
                <h3 className="font-semibold text-lg text-gray-600">Rating: {avgRating} ⭐</h3>
                <h3 className="text-gray-600 truncate">Cuisines: {cuisines.join(", ")}</h3>
                <h3 className="text-gray-800">Cost for Two: {costForTwo}</h3>
            </div>
        </div>
    );
};

// Higher order Component 

// take input - rescard
// output     - rescard - promoted


export const withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{

        const resData = props.resData;
        const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData.info;

        <div>
            <label className="rounded-md bg-black text-white">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    }
}

export default RestaurantCard;
