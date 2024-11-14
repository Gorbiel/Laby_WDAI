// Function to fetch and display the first 30 products
async function displayProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=30');
        const data = await response.json();

        // Container for products
        const productContainer = document.getElementById('product-container');

        data.products.forEach(product => {
            // Create the product card
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Thumbnail image
            const img = document.createElement('img');
            img.src = product.thumbnail;
            img.alt = product.title;

            // Title
            const title = document.createElement('div');
            title.classList.add('product-title');
            title.textContent = product.title;

            // Description
            const description = document.createElement('div');
            description.classList.add('product-description');
            description.textContent = product.description;

            // Append elements to the product card
            productCard.appendChild(img);
            productCard.appendChild(title);
            productCard.appendChild(description);

            // Append the product card to the container
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Fetch and display products on page load
displayProducts();