let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")
let productItem = document.querySelector(".product-item")
let productContainer = document.querySelectorAll(".carousel")


productContainer.forEach( product => {

    let productItemMargin = window.getComputedStyle(productItem).getPropertyValue("margin-right")
    productItemMargin = parseInt(productItemMargin)

    let productDimension = productItem.getBoundingClientRect().width
    productWidth = productDimension + productItemMargin

    nextBtn.addEventListener('click', function () {
        product.scrollLeft += productWidth
    })

    prevBtn.addEventListener('click', function () {
        product.scrollLeft -= productWidth
    })
})

