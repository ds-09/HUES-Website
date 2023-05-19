window.onload = function(){
  // Get all the cards and popups
  var cards = document.querySelectorAll(".painting-card");
  var modals = document.querySelectorAll(".painting-popup");

  // Loop through all the cards
  cards.forEach(function(card, index) {
    var modal = modals[index];

    // Get the close button and the buttons for wishlist and buy now
    var closeBtn = modal.querySelector(".close-btn");
    var wishlistBtn = modal.querySelector(".wishlist-btn");
    var buyNowBtn = modal.querySelector(".buy-now-btn");

    // When the user clicks on the card, show the popup
    card.onclick = function() {
      modal.style.display = "block";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    // When the user clicks on the close button, hide the popup
    closeBtn.onclick = function() {
      modal.style.display = "none";
      document.body.style.backgroundColor = "white";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.backgroundColor = "white";
      }
    }

    // When the user clicks on the wishlist button, add the item to the wishlist
    wishlistBtn.onclick = function() {
      // Your wishlist code here
    }

    // When the user clicks on the buy now button, add the item to the cart and redirect to checkout page
    buyNowBtn.onclick = function() {
      // Your buy now code here
    }
  });
};
