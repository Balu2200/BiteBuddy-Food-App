import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) =>{

    const [menuList, setMenuList] = useState(null);

    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setMenuList(json.data);
    }

    return menuList;
};

export default useRestaurantMenu;