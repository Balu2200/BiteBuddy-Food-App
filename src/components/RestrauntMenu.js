import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const Restrauntmenu = () =>{
    
    const [menuList, setMenuList] = useState(null);

    const {resId} = useParams();

    useEffect(() =>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setMenuList(json.data);
    }

    if (menuList == null){
        return (
            <Shimmer/>
        )
    }

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