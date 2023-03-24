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
    var total = 0
    
    
    if(document.querySelector(".free-shipping").value == "FREESHIPPING"){
        document.querySelector(".coupon-error").style.color = "green";
        document.querySelector(".coupon-error").innerText = "Coupon Applied";
        document.querySelector(".free-shipping").value = "";
        document.querySelector(".shipping-fee").innerText = "FREE"
        document.querySelector(".cart-total-total").innerText = document.querySelector(".cart-total-subtotal").innerText
        
    } else {
        document.querySelector(".coupon-error").style.color = "red";
        document.querySelector(".coupon-error").innerText = "Try again"
        document.querySelector(".free-shipping").value = "";
    }
}

// function productSubtotal(elem){
//     var total = 0;
//     var shipping = (document.querySelector(".cart-shipping-fee"))
//     if(document.querySelector(".cart-product-quantity").value !== 1) {
//         total = document.querySelector(".cart-product-price").innerText * document.querySelector(".cart-product-quantity").value;
//         document.querySelector(".cart-product-subtotal").innerText = total;
//         document.querySelector(".cart-total-subtotal").innerText = total;

//         if(shipping.innerText !== "FREE"){
//             document.querySelector(".cart-total-total").innerText = total + Number(shipping.innerText);
//             console.log(total)
//         } else if (shipping.innerText == "FREE") {
//             document.querySelector(".cart-total-total").innerText = document.querySelector(".cart-total-subtotal").innerText
//         }
        
//     }
// }

function productSubtotal(elem){
    var total = 0;
    var shipping = (document.querySelector(".cart-shipping-fee"))
    if(document.querySelector(".cart-product-quantity").value !== 1) {
        total = document.querySelector(".cart-product-price").innerText * document.querySelector(".cart-product-quantity").value;
        document.querySelector(".cart-product-subtotal").innerText = total;
        document.querySelector(".cart-total-subtotal").innerText = total;

        if(shipping.innerText !== "FREE"){
            document.querySelector(".cart-total-total").innerText = total + Number(shipping.innerText);
        } else if (shipping.innerText == "FREE") {
            document.querySelector(".cart-total-total").innerText = document.querySelector(".cart-total-subtotal").innerText
        }
        
    }
    // update cart-total-total element
    document.querySelector(".cart-total-total").innerText = Number(document.querySelector(".cart-total-subtotal").innerText) + Number(shipping.innerText);
}

document.querySelector(".cart-product-quantity").addEventListener("change", productSubtotal);

