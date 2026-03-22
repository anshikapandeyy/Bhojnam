const RestaurantList = [
  { id: 1, resName: "Spice Route", cuisine: "North Indian, Mughlai", rating: 4.5, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 2, resName: "Urban Tandoor", cuisine: "Punjabi", rating: 4.3, promoted: true, resImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { id: 3, resName: "Pizza Napoli", cuisine: "Italian", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  { id: 4, resName: "Burger Boulevard", cuisine: "American", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
  { id: 5, resName: "Sushi Zen", cuisine: "Japanese", rating: 3.6, promoted: true, resImage: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" },
  { id: 6, resName: "Dragon Wok", cuisine: "Chinese", rating: 4.1, promoted: false, resImage: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg" },
  { id: 7, resName: "Cafe Mocha", cuisine: "Cafe, Continental", rating: 4.3, promoted: true, resImage: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
  { id: 8, resName: "The Biryani House", cuisine: "Hyderabadi", rating: 1.7, promoted: false, resImage: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg" },
  { id: 9, resName: "The Pasta Bowl", cuisine: "Italian", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
  { id: 10, resName: "Taco Fiesta", cuisine: "Mexican", rating: 4.1, promoted: false, resImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { id: 11, resName: "Royal Dine", cuisine: "Indian", rating: 2.4, promoted: true, resImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" },
  { id: 12, resName: "Food Carnival", cuisine: "Multi Cuisine", rating: 4.0, promoted: false, resImage: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg" },
  { id: 13, resName: "Flavors of India", cuisine: "North Indian", rating: 4.6, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 14, resName: "Grill Nation", cuisine: "BBQ", rating: 4.3, promoted: true, resImage: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
  { id: 15, resName: "The Curry Leaf", cuisine: "South Indian", rating: 3.5, promoted: false, resImage: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
  { id: 16, resName: "Bombay Bistro", cuisine: "Indian", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 17, resName: "South Spice", cuisine: "South Indian", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
  { id: 18, resName: "The Hungry Fork", cuisine: "Continental", rating: 2.3, promoted: true, resImage: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" },
  { id: 19, resName: "Masala Junction", cuisine: "Indian", rating: 4.6, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 20, resName: "Street Treats", cuisine: "Fast Food", rating: 4.1, promoted: false, resImage: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
  { id: 21, resName: "Ocean Delight", cuisine: "Seafood", rating: 3.5, promoted: true, resImage: "https://images.pexels.com/photos/3296276/pexels-photo-3296276.jpeg" },
  { id: 22, resName: "Green Bowl", cuisine: "Healthy, Vegan", rating: 4.3, promoted: false, resImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
  { id: 23, resName: "Chai & Chat", cuisine: "Cafe", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
  { id: 24, resName: "Wrap House", cuisine: "Fast Food", rating: 2.1, promoted: false, resImage: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
  { id: 25, resName: "Kebab King", cuisine: "Mughlai", rating: 4.6, promoted: true, resImage: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
  { id: 26, resName: "Bakers Point", cuisine: "Bakery", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg" },
  { id: 27, resName: "The Dessert Room", cuisine: "Desserts", rating: 4.7, promoted: true, resImage: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg" },
  { id: 28, resName: "Saffron Kitchen", cuisine: "Indian", rating: 1.5, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 29, resName: "Taste of Punjab", cuisine: "Punjabi", rating: 4.6, promoted: false, resImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { id: 30, resName: "Cafe Delight", cuisine: "Cafe", rating: 4.3, promoted: true, resImage: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
  { id: 31, resName: "BBQ Express", cuisine: "Barbecue", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
  { id: 32, resName: "Fusion Feast", cuisine: "Fusion", rating: 2.2, promoted: true, resImage: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg" },
  { id: 33, resName: "City Kitchen", cuisine: "Multi Cuisine", rating: 4.1, promoted: false, resImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" },
  { id: 34, resName: "Urban Cafe", cuisine: "Cafe", rating: 4.3, promoted: true, resImage: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
  { id: 35, resName: "Wok & Roll", cuisine: "Chinese", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg" },
  { id: 36, resName: "Midnight Cravings", cuisine: "Fast Food", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
  { id: 37, resName: "The Snack Bar", cuisine: "Snacks", rating: 3.1, promoted: false, resImage: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" },
  { id: 38, resName: "Golden Spoon", cuisine: "Indian", rating: 4.5, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 39, resName: "The Food Factory", cuisine: "Multi Cuisine", rating: 4.0, promoted: false, resImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" },
  { id: 40, resName: "Dosa Plaza", cuisine: "South Indian", rating: 4.6, promoted: true, resImage: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" },
  { id: 41, resName: "Crispy Crust", cuisine: "Italian", rating: 3.3, promoted: false, resImage: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  { id: 42, resName: "Veggie Villa", cuisine: "Vegetarian", rating: 4.4, promoted: true, resImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
  { id: 43, resName: "The Meal Box", cuisine: "North Indian", rating: 4.2, promoted: false, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 44, resName: "Royal Rasoi", cuisine: "Indian", rating: 4.5, promoted: true, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 45, resName: "Spicy Affair", cuisine: "Indian", rating: 4.3, promoted: false, resImage: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" },
  { id: 46, resName: "Taste Buds", cuisine: "Multi Cuisine", rating: 4.1, promoted: true, resImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" },
  { id: 47, resName: "The Lunch Box", cuisine: "Indian", rating: 4.4, promoted: false, resImage: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
  { id: 48, resName: "Flame & Grill", cuisine: "Barbecue", rating: 4.6, promoted: true, resImage: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg" },
  { id: 49, resName: "Kitchen Stories", cuisine: "Continental", rating: 4.3, promoted: false, resImage: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" },
  { id: 50, resName: "Foodie's Hub", cuisine: "Multi Cuisine", rating: 4.2, promoted: true, resImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" }
];
const restaurantList = RestaurantList.map((res) => {
  let recommended = [];
  let newItems = [];

  if (res.cuisine.includes("Italian")) {
    recommended = ["Pizza", "Pasta", "Garlic Bread"];
    newItems = ["Cheese Burst Pizza", "White Sauce Pasta"];
  } 
  else if (res.cuisine.includes("Indian") || res.cuisine.includes("North Indian")) {
    recommended = ["Paneer Butter Masala", "Dal Makhani"];
    newItems = ["Cheese Naan", "Tandoori Momos"];
  } 
  else if (res.cuisine.includes("Chinese")) {
    recommended = ["Noodles", "Manchurian"];
    newItems = ["Chilli Paneer", "Spring Roll"];
  } 
  else if (res.cuisine.includes("Cafe")) {
    recommended = ["Coffee", "Brownie"];
    newItems = ["Oreo Shake", "Cold Coffee"];
  } 
  else if (res.cuisine.includes("Fast Food")) {
    recommended = ["Burger", "Fries"];
    newItems = ["Loaded Fries", "Cheese Burger"];
  } 
  else {
    recommended = ["Special Dish", "Chef Choice"];
    newItems = ["New Special", "Trending Dish"];
  }

  return {
    ...res,
    recommended,
    newItems
  };
});

export default restaurantList;