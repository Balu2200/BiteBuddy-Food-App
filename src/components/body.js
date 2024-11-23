import RestaurantCard from "./Restaurentcard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";


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
 
  const onlineStatus = useonlineStatus();
  if(onlineStatus === false) return <h1>Please check your internet Connection "❗"</h1>

  return listofRestrautents.length == 0 ? <Shimmer/>: (  
    <div className="Body">

      <div className="flex"> 

          <div className="search m-3 p-2 flex items-center">    
            <input type ="text" className="px-4 py-1 border border-solid border-black rounded-xl shadow-xl" placeholder = "Search item" value={searchtext}
              onChange={(e) =>{
                setSearchText(e.target.value);
              }}/> 

            <button
                className="px-4 py-2 bg-green-500 text-white font-semibold shadow-lg m-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95"
                onClick={() => {
                    const searchlist = listofRestrautents.filter((res) =>
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );
                    setfilteredRestraunts(searchlist);
                }}
            >
                Search
            </button>
          </div>  

          <div className="search m-3 p-2 flex items-center">
            <button className="px-4 py-2 flex items-center gap-2 border border-black shadow-lg bg-cyan-500 text-white font-medium rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:shadow-xl active:scale-95" 
            onClick={()=>{                                        
              const filteredlist = listofRestrautents.filter((res)=>res.info.avgRating>4.2);
              setfilteredRestraunts(filteredlist);
            }}>filter-top-restaurants</button>
          </div>

      </div>

      <div className="flex flex-wrap justify-center">    
        {
          filteredRestraunts.map((restaurant) => (
            <Link 
              key={restaurant.info.id} 
              to={"/restaurants/" + restaurant.info.id} 
              className="hover:bg-gray-200 hover:text-blue-700 p-2 rounded transition-colors duration-300"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
    </div>
  );

};


export default Body;