import RestaurantCard from "./RestaurantCard.jsx";
import restaurantList from "../utils/constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [allRestaurants] = useState(restaurantList);
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search Restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res.resName
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => res.rating > 4
            );
            setListOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>

      </div>

      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            resName={res.resName}
            cuisine={res.cuisine}
            rating={res.rating}
            resImage={res.resImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;