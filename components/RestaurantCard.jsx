const StyleCard={
    backgroundColor:"#f0f0f0",
}
const RestaurantCard=(props)=>{
    const fullStars = Math.floor(props.rating);
  const emptyStars = 5 - fullStars;
    return(
        <div className="res-card" style={StyleCard}>
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
export default RestaurantCard;