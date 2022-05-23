

var reg = 0
var cartItems = document.getElementsByClassName('cart-items')[0]

while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}



function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


//valor regiao

/*
var poazs = document.getElementById("poazs")
var poazc = document.getElementById("poazc")
var poazl = document.getElementById("poazl")
var poazn = document.getElementById("poazn")

if (document.getElementById("poazs").checked) {

    valorRegiao = 22.00
}

if (document.getElementById("poazc").checked) {

    valorRegiao = 5.00
}

if (document.getElementById("poazl").checked) {

    valorRegiao = 16.00
}
if (document.getElementById("poazn").checked) {

    valorRegiao = 12.00
}
*/




//botão de envio do pedido

function purchaseClicked() {
    


    var cartItems = document.getElementsByClassName('cart-items')[0]
    var nome = document.getElementById("nome").value
    var telefone = document.getElementById("telefone").value
    var rua = document.getElementById("rua").value
    var numero = document.getElementById("numero").value
    var bairro = document.getElementById("bairro").value
    //var complemento = document.getElementById("complemento").value

    /*
    var poazs = document.getElementById("poazs")
    var poazc = document.getElementById("poazc")
    var poazl = document.getElementById("poazl")
    var poazn = document.getElementById("poazn")
     var checkRegiao = 1

    if (document.getElementById("poazs").checked )  {
        checkRegiao = 1
    }

    if (document.getElementById("poazc").checked) {
       checkRegiao = 1
    }

    if (document.getElementById("poazl").checked) {
        checkRegiao = 1
    }
    if (document.getElementById("poazn").checked) {
        checkRegiao = 1
    }
    */    

    
    if (cartItems.hasChildNodes()) {
        if (nome != ""){
            if (telefone != ""){
                if (rua != ""){
                    if (numero != ""){
                        if (bairro != ""){
                           
                            if(document.getElementById("poazs").checked){
                                var reg = 1
                            }
                            else if(document.getElementById("poazc").checked){
                                var reg = 1
                            }
                            else if(document.getElementById("poazl").checked){
                                var reg = 1
                            }
                            else if(document.getElementById("poazn").checked){
                                var reg = 1
                            }
                            if(reg == 1){
                            alert('Seu pedido foi enviado com sucesso; entraremos em contato em breve. Agradecemos a preferência')
                                while (cartItems.hasChildNodes()) {
                                    cartItems.removeChild(cartItems.firstChild)
                                    document.getElementById("nome").value = ""
                                    document.getElementById("telefone").value = ""
                                    document.getElementById("rua").value = ""
                                    document.getElementById("numero").value = ""
                                    document.getElementById("bairro").value = ""
                                    document.getElementById("complemento").value = ""
                                }
                                var ele = document.getElementsByName("Regiao");
                                for(var i=0;i<ele.length;i++){
                                   ele[i].checked = false;}
                            }
                            else{alert("escolha uma região")}
                        }
                        else{
                            alert("complete o campo 'Seu Bairro'")
                        } 
                    }
                    else{
                        alert("complete o campo 'Número da casa'")
                    }  
                }
                else{
                    alert("complete o campo 'Seu Endereço'")
                }  
            }
            else{
                alert("complete o campo 'Seu Telefone'")
            }  
        }
        else{
            alert("complete o campo 'Seu Nome'")
        }  
    }
    else{
        alert('Escolha um produto')
    }

    updateCartTotal()
}

/*
    alert('Seu pedido foi enviado com sucesso; entraremos em contato em breve. Agradecemos a preferência')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }


*/

//coisas que mudam o preço total

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}



function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este item já foi adicionado ao carrinho')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 40px; height: 30px;">
            <button class="btn btn-danger" type="button" style="margin: 0% 0% 0% 5%;">Remover</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

// baseado nas linhas do carrinho ^ (var cartrowcontents)
// altera o preço total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var entrega = 0
    if(document.getElementById("poazs").checked){
        var entrega = 22.00
    }
    else if(document.getElementById("poazc").checked){
        var entrega = 5.00
    }
    else if(document.getElementById("poazl").checked){
        var entrega = 16.00
    }
    else if(document.getElementById("poazn").checked){
        var entrega = 12.00
    }
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('R$', ''))
        var quantity = quantityElement.value

        total = total + (price * quantity)
    }

    total = Math.round((total + entrega) * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R$' + total

    if(cartItemContainer = [0]){


    }
    
}



