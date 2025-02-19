document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        slidesContainer.style.transition = "transform 0.5s ease-in-out"; 
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateSlide();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    // Tự động chuyển slide sau 10 giây
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }, 10000);

    function loadCategories() {
        categoryContainer.innerHTML = categories.map(category => `
            <div class="category-item">
                <img src="images/${category.img}" alt="${category.name}">
                <p>${category.name}</p>
            </div>
        `).join('');
    }

    function loadProducts() {
        productContainer.innerHTML = products.map(product => `
            <div class="product-item">
                <img src="images/${product.img}" alt="${product.name}">
                <p>${product.name}</p>
                <span>${product.price}</span>
            </div>
        `).join('');
    }

    loadCategories();
    loadProducts();
});

document.getElementById("shop-button").addEventListener("click", function() {
    document.getElementById("shop-section").style.display = "block";
});