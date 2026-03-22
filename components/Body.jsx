import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.jsx";
import restaurantList from "../utils/constants";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [allRestaurants] = useState(restaurantList);
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">

      <div className="filter">

        <input
          className="search-box"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              allRestaurants.filter((res) =>
                res.resName.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              allRestaurants.filter((res) => res.rating > 4)
            );
          }}
        >
          Top Rated
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
        {listOfRestaurants.map((res) =>
          res.promoted ? (
            <PromotedRestaurantCard
              key={res.id}
              {...res}
              onClick={() => setSelectedRestaurant(res)}
            />
          ) : (
            <RestaurantCard
              key={res.id}
              {...res}
              onClick={() => setSelectedRestaurant(res)}
            />
          )
        )}
      </div>

      {selectedRestaurant && (
        <div className="recommend">
          <h2>{selectedRestaurant.resName}</h2>

          <h3>Recommended</h3>
          <ul>
            {selectedRestaurant.recommended?.map((dish, i) => (
              <li key={i}>{dish}</li>
            ))}
          </ul>

          <h3>New Items</h3>
          <ul>
            {selectedRestaurant.newItems?.map((dish, i) => (
              <li key={i}>{dish}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Body;