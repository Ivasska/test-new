document.addEventListener("DOMContentLoaded", function () {
    fetch("/cart.js")
      .then((response) => response.json())
      .then((cart) => {
        const itemsInCart = cart.items.map((item) => item.product_id);
  
        document.querySelectorAll(".product-card").forEach((card) => {
          const productId = parseInt(card.dataset.productId, 10);
          if (itemsInCart.includes(productId)) {
            card.style.display = "none";
          }
        });
      })
      .catch((error) => {
        console.error("Cart fetch error:", error);
      });
  });