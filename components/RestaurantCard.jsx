import { useDispatch } from "react-redux";
import { addItems } from '../utils/cartSlice.js';

const StyleCard = {
  backgroundColor: "#f0f0f0",
}

const RestaurantCard = (props) => {
  const fullStars = Math.floor(props.rating);
  const emptyStars = 5 - fullStars;

  const dispatch = useDispatch();

  const { showRemove, onRemove } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(addItems({
      resName: props.resName,
      resImage: props.resImage,
      cuisine: props.cuisine,
      rating: props.rating
    }));
  };

  return (
    <div className="res-card" style={StyleCard} onClick={() => props.onClick(props)}>
      
      {showRemove ? (
        <div className="add" onClick={(e) => { e.stopPropagation(); onRemove(); }}>
          Remove
        </div>
      ) : (
        <div className="add" onClick={handleClick}>
          Add
        </div>
      )}

      <img className="res-logo" src={props.resImage} />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>    
      <h4>
        {"⭐".repeat(fullStars)}
        {"☆".repeat(emptyStars)}
      </h4> 
    </div> 
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="res-card promoted" style={StyleCard}>
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;