document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const productCount = document.getElementById("product-count");
    const selectedCount = document.getElementById("selected-count");

    let productCounter = document.querySelectorAll(".product").length;
    let selectedCounter = 0;

    productCount.textContent = productCounter;

    function selectProduct(event) {
        let productElement = event.currentTarget;
        if (productElement.classList.contains("selected")) {
            productElement.classList.remove("selected");
            selectedCounter--;
        } else {
            productElement.classList.add("selected");
            selectedCounter++;
        }
        selectedCount.textContent = selectedCounter;
    }

    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", selectProduct);
    });

});
