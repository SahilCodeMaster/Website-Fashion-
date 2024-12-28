var addItemId = 0;

function addTocart(item) {
    addItemId += 1;

    // Get product details from data attributes
    var productName = item.getAttribute('data-name');
    var productPrice = item.getAttribute('data-price');
    var productImageSrc = item.querySelector('img').getAttribute('src');

    // Create a new div for the selected item
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', 'cartItem' + addItemId);

    // Create an img element for the item
    var img = document.createElement('img');
    img.setAttribute('src', productImageSrc);

    // Create a div for product details
    var details = document.createElement('div');
    details.classList.add('details');

    // Add product name and price to the details div
    var name = document.createElement('span');
    name.textContent = productName;
    var price = document.createElement('span');
    price.textContent = 'Price: ' + productPrice;

    details.appendChild(name);
    details.appendChild(price);

    // Find the cart container where we will append the item
    var cartItems = document.getElementById('cart-items');

    // Append the img and details to the new item div
    selectedItem.appendChild(img);
    selectedItem.appendChild(details);

    // Add the new item to the cart
    cartItems.appendChild(selectedItem);
}

// Function for Place Order Button
function placeOrder() {
    alert("Order placed successfully! Thank You....");
    // You can replace this with an actual order processing functionality
    document.getElementById('cart-items').innerHTML = ''; // Clear cart after placing order
}
