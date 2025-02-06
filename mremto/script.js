// document.addEventListener("DOMContentLoaded", () => {
//     const cartItemsContainer = document.querySelector(".cart-items");
//     const subtotalElement = document.getElementById("subtotal");
//     const totalElement = document.getElementById("total");
//     const checkoutButton = document.querySelector(".checkout-btn");

//     let cart = [];

//     // Fetch cart data from API (Replace 'cart.json' with actual API endpoint)
//     fetch("cart.json")
//         .then(response => response.json())
//         .then(data => {
//             cart = data;
//             renderCart();
//         })
//         .catch(error => console.error("Error fetching cart data:", error));

//     // Function to render cart items dynamically
//     function renderCart() {
//         cartItemsContainer.innerHTML = ""; // Clear previous content
//         let subtotal = 0;

//         cart.forEach(item => {
//             const itemSubtotal = item.price * item.quantity;
//             subtotal += itemSubtotal;

//             const cartItem = document.createElement("div");
//             cartItem.classList.add("cart-item");
//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.title}">
//                 <div class="item-details">
//                     <h3>${item.title}</h3>
//                     <p>Price: $${item.price}</p>
//                     <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
//                     <span class="item-subtotal">Subtotal: $${itemSubtotal}</span>
//                     <button class="remove-item" data-id="${item.id}">🗑</button>
//                 </div>
//             `;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         updateTotals(subtotal);
//         attachEventListeners();
//     }

//     // Function to update cart totals
//     function updateTotals(subtotal) {
//         subtotalElement.textContent = `$${subtotal}`;
//         totalElement.textContent = `$${subtotal}`; // You can add tax/shipping here if needed
//     }

//     // Attach event listeners for quantity change and remove
//     function attachEventListeners() {
//         document.querySelectorAll("input[type='number']").forEach(input => {
//             input.addEventListener("change", event => {
//                 const itemId = parseInt(event.target.dataset.id);
//                 const newQuantity = parseInt(event.target.value);
//                 updateQuantity(itemId, newQuantity);
//             });
//         });

//         document.querySelectorAll(".remove-item").forEach(button => {
//             button.addEventListener("click", event => {
//                 const itemId = parseInt(event.target.dataset.id);
//                 removeItem(itemId);
//             });
//         });
//     }

//     // Update item quantity
//     function updateQuantity(id, quantity) {
//         const item = cart.find(item => item.id === id);
//         if (item) {
//             item.quantity = quantity;
//             renderCart();
//         }
//     }

//     // Remove item from cart
//     function removeItem(id) {
//         cart = cart.filter(item => item.id !== id);
//         renderCart();
//     }

//     // Checkout button functionality
//     checkoutButton.addEventListener("click", () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty!");
//             return;
//         }
//         alert("Proceeding to checkout...");
//         // Redirect to checkout page (if applicable)
//         // window.location.href = "checkout.html";
//     });
// });




document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.querySelector(".checkout-btn");

    let cart = [];

    // Fetch cart data from API
    async function fetchCartData() {
        try {
            const response = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            cart = await response.json();
            renderCart();
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }

    // Format price to Indian Rupees (₹)
    function formatCurrency(amount) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(amount);
    }

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = ""; // Clear previous content
        let subtotal = 0;

        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="item-details">
                    <h3>${item.title}</h3>
                    <p>Price: ${formatCurrency(item.price)}</p>
                    <input type="number" class="item-quantity" value="${item.quantity}" min="1" data-id="${item.id}">
                    <span class="item-subtotal">Subtotal: ${formatCurrency(itemSubtotal)}</span>
                    <button class="remove-item" data-id="${item.id}">🗑</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotals(subtotal);
        attachEventListeners();
    }

    // Update total and subtotal
    function updateTotals(subtotal) {
        subtotalElement.textContent = formatCurrency(subtotal);
        totalElement.textContent = formatCurrency(subtotal); // Modify if additional charges apply
    }

    // Attach event listeners for quantity change and item removal
    function attachEventListeners() {
        document.querySelectorAll(".item-quantity").forEach(input => {
            input.addEventListener("change", event => {
                const itemId = parseInt(event.target.dataset.id);
                const newQuantity = parseInt(event.target.value);
                updateQuantity(itemId, newQuantity);
            });
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", event => {
                const itemId = parseInt(event.target.dataset.id);
                removeItem(itemId);
            });
        });
    }

    // Update quantity of a cart item
    function updateQuantity(id, quantity) {
        const item = cart.find(item => item.id === id);
        if (item && quantity > 0) {
            item.quantity = quantity;
            renderCart();
        }
    }

    // Remove an item from the cart
    function removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        renderCart();
    }

    // Handle Checkout Button Click
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Proceeding to checkout...");
        // Redirect to checkout page if applicable
        // window.location.href = "checkout.html";
    });

    // Load cart data on page load
    fetchCartData();
});
