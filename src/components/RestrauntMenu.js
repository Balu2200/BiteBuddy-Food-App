import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restrauntmenu = () =>{
    const {resId}  = useParams();
    const menuList = useRestaurantMenu(resId);

    if (menuList == null) return <Shimmer/>;
      
    const { name, cuisines,avgRating,costForTwo, city}= menuList.cards[2].card.card.info;
    const { itemCards} = menuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{avgRating}</p>
            <ul>
                <h4>{cuisines.join(",")}</h4>
                {itemCards.map(item => <li key={item.card.info.id} >{item.card.info.name}  - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>
            
        </div>
    )
};

export default Restrauntmenu;