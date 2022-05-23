

var tam1 = document.getElementById("pequeno")
var tam2 = document.getElementById("medio")
var tam3 = document.getElementById("grande")
var tam
var tams

var ser1 = document.getElementById("unhas")
var ser2 = document.getElementById("tosah")
var ser3 = document.getElementById("xampue")
var serv11
var serv22
var serv33
var serv111
var serv222
var serv333
var serv

var av = document.getElementById("vista")
var parc = document.getElementById("parc")
var pagt

var ban1 = document.getElementById("banho1")
var ban2 = document.getElementById("banho2")
var ban3 = document.getElementById("banho3")
var ban4 = document.getElementById("banho4")
var ban
var bans

var enviar = document.getElementById("enviar")

var totalb 
var totall
var totalr


enviar.onclick = function(){
    
    //tamanho

    //pequeno
    if (document.getElementById("pequeno").checked) {
        tam = "Banho Animal de Pequeno Porte - R$ 30.00"
        tams = 30
    }
    //medio
    if (document.getElementById("medio").checked) {
        tam = "Banho Animal de Médio Porte - R$ 40.00"
        tams = 40
    }
    //grande
    if (document.getElementById("grande").checked) {
        tam = "Banho Animal de Grande Porte - R$ 50.00"
        tams = 50
    }

    //extra

    //extra unhas
    if (document.getElementById("unhas").checked) {
        serv11 = " Corte de Unhas - R$ 5.00 " + "<br>"
        serv111 = 5
    }
    else{
        serv11 =""
        serv111 =0
    }
    //extra tosa
    if (document.getElementById("tosah").checked) {
        serv22 = " Tosa Higiênica - R$ 10.00" + "<br>"
        serv222 = 10
    }
    else{
        serv22 =""
        serv222 =0
    }    
    //extra xampu
    if (document.getElementById("xampue").checked) {
        serv33 = " Xampu Especial - R$ 15.00" + "<br>"
        serv333 = 15
    }
    else{
        serv33 =""
        serv333 =0
    }   

    //pagamento

    //a vista
    if (document.getElementById("vista").checked) {
        pgto = " Forma de Pagamento: Á vista"
    }
    //parcelado
    if (document.getElementById("parc").checked) {
        pgto = "Forma de Pagamento: Parcelado"
    }    

    //fidelidade

    //2 banhos no mês
    if (document.getElementById("banho1").checked) {
        ban = "2 Banhos neste mês - desconto de 5% no total"
        bans = 5
        banx = 2
    }
    //3 banhos no mês
    if (document.getElementById("banho2").checked) {
        ban = "3 Banhos neste mês - desconto de 10% no total"
        bans = 10
        banx = 3
    }
    //4 banhos no mês
    if (document.getElementById("banho3").checked) {
        ban = "4 Banhos neste mês - desconto de 15% no total"
        bans = 15
        banx = 4
    }    
    //mais de 4 banhos no mês
    if (document.getElementById("banho4").checked) {
        ban = "Acima de 4 Banhos neste mês - desconto de 20% no total"
        bans = 20
        banx = parseInt(prompt("Quantos banhos neste mês?"))
    }

    serv = (serv11 + serv22 + serv33)
    totalb = (tams + serv111 + serv222 + serv333)
    totalb = totalb * banx
    totalr = (totalb)/100 *bans
    totall = (totalb - totalr) 

    alert("Preço total de "+ (banx) + " banhos neste mês - R$ " + (totall))  
    //alert((tam) +"<br>"+ (serv) + (pgto) +"<br>"+ (ban) +"<br>"+ "Preço total de "+ (banx) + " banhos neste mês - R$ " + (totall)  )

    ///document.write((tam) +"<br>"+ (serv) + (pgto) +"<br>"+ (ban) +"<br>"+ "Preço total de "+ (banx) + " banhos neste mês - R$ " + (totall)  )

}



