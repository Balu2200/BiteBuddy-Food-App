import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const resData = props.resData
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo}= resData.info // destructruing 
    return (
        <div className="res-card" style={{backgroundColor :"#f0f0f0"}}>
            <img className="res-logo" alt='res-logo' src = {CDN_URL + cloudinaryImageId}/>
            <h4>{name}</h4>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwo}</h3>
        </div>
    )
};

export default RestaurantCard;