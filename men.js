// Handle "Add to Cart" Button Click
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.product-card').querySelector('h3').innerText;
        alert(`${productName} has been added to your cart!`);
    });
});
