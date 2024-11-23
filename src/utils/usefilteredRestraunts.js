import { useEffect, useState } from "react";

const useFilteredRestaurants = () => {

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    useEffect(() => {fetchData();}, []);

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const data = await response.json();
          const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setFilteredRestaurants(restaurants);
        } catch (error) {
          console.error("Failed to fetch restaurant data:", error);
        }
    };

    return filteredRestaurants;
};

export default useFilteredRestaurants;
