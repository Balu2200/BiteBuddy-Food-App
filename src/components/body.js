import RestaurantCard from "./Restaurentcard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listofRestrautents,setListOfRestrauents] = useState([]);
  const [filteredRestraunts,setfilteredRestraunts]= useState([]);
  const [searchtext,setSearchText] = useState("");

  useEffect(() => { fetchData(); }, []);  
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestrauents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  return listofRestrautents.length == 0 ? <Shimmer/>: (  // if length = 0 then return shimmer component else return pagen -> conditional rendering 
    <div className="Body">

      <div className="filter"> 

        <div className="search">    
           <input type ="text" className="search-box" value={searchtext}
            onChange={(e) =>{
              setSearchText(e.target.value);
            }}/> 

           <button className="search-btn" onClick={() =>{                                                          // search box
              const searchlist = listofRestrautents.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setfilteredRestraunts(searchlist);
           }}>search</button>
        </div>  

        <button className="filter-btn" onClick={()=>{                                       // adding filter button    
          const filteredlist = listofRestrautents.filter((res)=>res.info.avgRating>4.2);
          setfilteredRestraunts(filteredlist);
        }}>filter-top-restaurants</button>

      </div>

      <div className="res-container">    
          {
            filteredRestraunts.map((restaurant)=>(<Link key={restaurant.info.id} to= {"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>)) // container body
          }
      </div>

    </div>
  );

};


export default Body;