const cart = [];
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        

        function addToCart(productName, price) {
            cart.push({ productName, price });
            updateCartDisplay();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }

        function updateCartDisplay() {
            cartItemsElement.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <span>${item.productName} - $${item.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItemsElement.appendChild(cartItemElement);
                total += item.price;
            });
            cartTotalElement.textContent = total.toFixed(2);
        }