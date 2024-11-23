import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restrauntmenu = () => {
    const { resId } = useParams();
    const menuList = useRestaurantMenu(resId);

    if (menuList == null) return <Shimmer />;

    const { name, cuisines, avgRating, costForTwo, city } =
        menuList.cards[2].card.card.info;
    const { itemCards } =
        menuList.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="menu p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-600">Average Rating: {avgRating} ⭐</p>
            <p className="text-gray-600">
                {cuisines.join(", ")} • {city}
            </p>
            <p className="text-gray-600">Cost for Two: ₹{costForTwo / 100}</p>
            <ul className="mt-4 space-y-2">
                {itemCards.map((item) => (
                    <li
                        key={item.card.info.id}
                        className="flex justify-between bg-gray-50 p-3 rounded shadow-sm hover:bg-gray-100"
                    >
                        <span className="font-medium text-gray-700">
                            {item.card.info.name}
                        </span>
                        <span className="text-gray-500">
                            ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Restrauntmenu;
