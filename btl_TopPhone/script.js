const btn = document.querySelectorAll("button.slider__header-item-btn")
    // console.log(btn)
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        {

            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector(".slider__header-item__img").src
            var productName = product.querySelector(".slider__header-item__name").innerText
            var productPrice = product.querySelector(".slider__header-item__price").innerText
                // console.log(productImg,productName,productPrice)
            addcart(productImg, productName, productPrice)
        }
    })

})

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr")

    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {

            alert("Sản phẩm của bạn đã có trong giỏ hàng !")
            return
        }
    }
    var trcontent = '<tr><td style="display:flex;align-items:center;"><img style="width:90px" src="' + productImg + '" alt=""><h2 class="tb-h2"><span class="title">' + productName + '</span></h2></td><td><p ><span class="prices" class="tb-h2-p">' + productPrice + '</span><sup>đ</sup></p></td><td><input class="tb-h2" style="width: 40px; outline:none;text-align: center;" type="number" value="1" min="1"></td><td class="tb-h2"  style="cursor: pointer;"><p class="del"><span class="cart-delete">Xóa</span></p></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector(" tbody")
        // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("tbody input").value
        
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        var newsProductPrice = productPrice.split('.').join('');
            // console.log(productPrice)
        totalA = inputValue * newsProductPrice 
        // totalB = totalA.toLocaleString('de-DE')
            // console.log(totalB)
        totalC = totalC + totalA
        // console.log(totalC)
        totalD = totalC.toLocaleString('de-DE')

    }
    var cartTotalA = document.querySelector(".prices-total")
    cartTotalA.innerHTML = totalD
    // console.log(cartTotalA)
   

}



function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {


        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement.parentElement
            cartitemR.remove()
        })

    }
}