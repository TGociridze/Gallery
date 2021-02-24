var favourites = localStorage.getItem('favourites') || [];

if (typeof(favourites) == "string") {
favourites = favourites.split(',');

favourites.forEach(function(favourite) {
    document.getElementById(favourite).className = 'fav far fa-heart';
});
}
else {
  favourites = [];
}
const product = document.querySelector(".gallery")
product.onclick = function (event) { 
  
    const id = event.target.id,
    item = event.target,
    index = favourites.indexOf(id);
if (!id) return;
if (index == -1) {
  favourites.push(id);
  item.className = 'fav far fa-heart';
} else {
  favourites.splice(index, 1);
  item.className = 'far fa-heart';
}
localStorage.setItem('favourites', favourites); 
};





