
// Cart array to hold added products
let cart = [];

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('#products button');

// Loop through buttons and add click event
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index);
    });
});

// Function to handle adding the product to the cart
function addToCart(productIndex) {
    const products = [
        { name: "Product 1", price: 10 },
        { name: "Product 2", price: 15 },
        { name: "Product 3", price: 20 }
    ];

    // Check if the product is already in the cart
    const productInCart = cart.find(item => item.name === products[productIndex].name);

    if (productInCart) {
        // If it exists, increase the quantity
        productInCart.quantity += 1;
    } else {
        // If not, add it to the cart with a quantity of 1
        cart.push({ ...products[productIndex], quantity: 1 });
    }

    // Update the cart display
    updateCart();
};

// Function to handle removing the product from the cart
function removeFromCart(productIndex) {
    // Remove the product at the given index
    cart.splice(productIndex, 1);

    // Update the cart display
    updateCart();
};

// Save the cart to local storage
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Load the cart from local storage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        cart = []; // Initialize the cart if there's nothing in local storage
    }
};

function updateCart(){
    const cartSection = document.getElementById("cart");
    let cartContent = "<h2>Your Cart</h2>";
    let totalPrice = 0;

    if(cart.length === 0){
        cartContent += "<p>Your cart is empty</p>"
    } else {
    cart.forEach((item, index) => {
        cartContent += `<p>${item.name} - $${item.price} x ${item.quantity}
                        <button onclick="removeFromCart(${index})">Remove</button></p>`;
        totalPrice += item.price * item.quantity;
    })};

    cartContent += `<h3>Total: ${totalPrice}</h3>`;

    cartSection.innerHTML = cartContent;
    saveCart(); // Save the cart after updating
};

// On page load, load the cart
loadCart();
updateCart();