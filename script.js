// Single Product HTML
var MainImg = document.getElementById("MainImg")
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    MainImg.src = smallImg[3].src;
}

function addToCart(elem) {
    if (elem.innerText == "Add to Cart") {
        elem.innerText = "Added to Cart";
    } else if (elem.innerText == "Added to Cart") {
        elem.innerText = "Add to Cart";
    }
}

function freeShipping(elem) {
    if(document.querySelector(".free-shipping").value == "FREESHIPPING"){
        document.querySelector(".coupon-error").style.color = "green";
        document.querySelector(".coupon-error").innerText = "Coupon Applied";
        document.querySelector(".free-shipping").value = "";
        document.querySelector(".shipping-fee").innerText = "FREE"

        
    } else {
        document.querySelector(".coupon-error").style.color = "red";
        document.querySelector(".coupon-error").innerText = "Try again"
        document.querySelector(".free-shipping").value = "";
    }
}