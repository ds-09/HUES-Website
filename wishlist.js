const wishlistButtons = document.querySelectorAll('.wishlist-btn');
wishlistButtons.forEach(button => {
    button.addEventListener('click', addToWishlist);
});
function addToWishlist(event) {
    const card = event.target.closest('.painting-card');
    const imageSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const price = card.querySelector('.painting-price').textContent;

  // Store the card details in a JavaScript object or array
    const wishlistItem = {
    imageSrc,
    title,
    price
};

}

function addToWishlist(event) {
  // ...

  // Retrieve the existing wishlist items from localStorage
  let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

  // Add the new wishlist item to the array
  wishlistItems.push(wishlistItem);

  // Store the updated wishlist items back in localStorage
  localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
}


// In JavaScript
const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
const wishlistList = document.getElementById('wishlist-items');

wishlistItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <img src="${item.imageSrc}">
    <h3>${item.title}</h3>
    <p class="painting-price">${item.price}</p>
  `;
  wishlistList.appendChild(listItem);
});
