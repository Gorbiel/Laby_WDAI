// Function to fetch and display products based on a search query and sort order
async function fetchAndDisplayProducts(query = '', sortOrder = 'none') {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await response.json();

        // Sort products based on the sort order
        let products = data.products;
        if (sortOrder === 'asc') {
            products = products.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === 'desc') {
            products = products.sort((a, b) => b.title.localeCompare(a.title));
        }

        // Clear the current products
        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';

        // Display the sorted products
        products.forEach(product => {
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

// Function to handle search and sort inputs
function handleInputs() {
    const searchBox = document.getElementById('search-box');
    const sortSelect = document.getElementById('sort-select');

    // Event listener for the search box
    searchBox.addEventListener('input', () => {
        const query = searchBox.value;
        const sortOrder = sortSelect.value;
        fetchAndDisplayProducts(query, sortOrder);  // Update products based on query and sort
    });

    // Event listener for the sort dropdown
    sortSelect.addEventListener('change', () => {
        const query = searchBox.value;
        const sortOrder = sortSelect.value;
        fetchAndDisplayProducts(query, sortOrder);  // Update products based on query and sort
    });
}

// Initialize the product display and input handlers on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayProducts();  // Fetch and display all products initially
    handleInputs();  // Set up input listeners for search and sort
});
