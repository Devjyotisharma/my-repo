import React, { useEffect, useState } from 'react';
import Restocard from "./Restocard";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData =async () => {
        const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5759152&lng=77.35734479999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json  = await data.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }  

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>

    }

    if(resList  == undefined || resList.length === 0) { 
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type="text" placeholder="Search" className="search-input" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />

                    <button className="search-btn" onClick={() => {
                        let filteredResListResp  = resList.filter((restro) => 
                            restro.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        setFilteredResList(filteredResListResp);
                    }} >Search</button> 

                    <button className="filter-btn" onClick={()=> {
                    let resListResp  = resList.filter((restaurant)=> restaurant.info.avgRating > 4.0);
                    setResList(resListResp);
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredResList.map((restaurant) => {
                        return  <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Restocard resList={restaurant.info} /></Link>
                    })  
                }
            </div>

        </div>
    )
}

export default Body;