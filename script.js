

//Pegar os elementos
const select = document.querySelector(".select")
const options = document.querySelector(".options")
const spans = options.querySelectorAll("span")
const button  = document.querySelector('input[type="button"]')
//criar o evento select
select.addEventListener("click", () =>{
    const img1 = select.querySelectorAll("img")
    if(img1[1].classList.contains("hide")){
        img1[0].classList.add("hide")
        img1[1].classList.remove("hide")
    }
    else{
        img1[0].classList.remove("hide")
        img1[1].classList.add("hide")
    }
    if(options.classList.contains("hide")){
        options.classList.remove("hide")
    }
    else{
        options.classList.add("hide")
    }
})
//criar o evento do option
spans.forEach((spans) => spans.addEventListener("click", ()=>{
    const p = select.querySelector("p")
    const img1 = select.querySelectorAll("img")
    if(spans.id === "dolar"){
        p.textContent = "Dólar Americano"
        options.classList.add("hide")
        if(img1[1].classList.contains("hide")){
            img1[0].classList.add("hide")
            img1[1].classList.remove("hide")
        }
        else{
            img1[0].classList.remove("hide")
            img1[1].classList.add("hide")
        }
    }
    else if(spans.id === "euro"){
        p.textContent = "Euro"
        options.classList.add("hide")
        if(img1[1].classList.contains("hide")){
            img1[0].classList.add("hide")
            img1[1].classList.remove("hide")
        }
        else{
            img1[0].classList.remove("hide")
            img1[1].classList.add("hide")
        }
    }
    else if(spans.id === "iene"){
        p.textContent = "Iene Japonês"
        options.classList.add("hide")
        if(img1[1].classList.contains("hide")){
            img1[0].classList.add("hide")
            img1[1].classList.remove("hide")
        }
        else{
            img1[0].classList.remove("hide")
            img1[1].classList.add("hide")
        }
    }
    else if(spans.id === "peso"){
        p.textContent = "Peso Argentino"
        options.classList.add("hide")
        if(img1[1].classList.contains("hide")){
            img1[0].classList.add("hide")
            img1[1].classList.remove("hide")
        }
        else{
            img1[0].classList.remove("hide")
            img1[1].classList.add("hide")
        }
    }
    else if(spans.id === "yuan"){
        p.textContent = "Yuan Chinês"
        options.classList.add("hide")
        if(img1[1].classList.contains("hide")){
            img1[0].classList.add("hide")
            img1[1].classList.remove("hide")
        }
        else{
            img1[0].classList.remove("hide")
            img1[1].classList.add("hide")
        }
    }
    else{
        alert("Erro inesperado")
    }  
}))

//evento do botao
button.addEventListener("click", () => {
const input = document.querySelector("#numero")
const valor = input.value
const p = select.querySelector("p")
const texto = p.textContent
const coin = document.querySelector(".coin")
const pcoin = coin.querySelector("p")
const main = document.querySelector("main")
const h1 = coin.querySelector("h1")
if(valor === ""){
    alert("Digite algo")
    return
}
if(texto === "Dólar Americano"){
    h1.textContent = `${(valor * 4.86).toFixed(2)} REAIS`
    pcoin.textContent = " US$ 1 = R$ 4,86"
    coin.classList.remove("hide")
    main.style.borderRadius = "16px 16px 0px 0px"
}
else if(texto === "Euro"){
    h1.textContent  = `${(valor * 5.30).toFixed(2)} REAIS`
    pcoin.textContent = "UE 1 = R$ 5,30"
    coin.classList.remove("hide")
    main.style.borderRadius = "16px 16px 0px 0px"
}
else if(texto === "Iene Japonês"){
    h1.textContent = `${(valor * 0.0341).toFixed(2)} REAIS`
    pcoin.textContent = "JPY 1 =  R$ 0,0341"
    coin.classList.remove("hide")
    main.style.borderRadius = "16px 16px 0px 0px"
}
else if(texto === "Peso Argentino"){
    h1.textContent = `${(valor * 0.017).toFixed(2)} REAIS`
    pcoin.textContent = "PESO 1 = R$ 0,017"
    coin.classList.remove("hide")
    main.style.borderRadius = "16px 16px 0px 0px"
}
else if (texto === "Yuan Chinês"){
    h1.textContent = `${(valor * 0.65).toFixed(2)} REAIS`
    pcoin.textContent = "Yuan 1 =  R$ 0,65"
    coin.classList.remove("hide")
    main.style.borderRadius = "16px 16px 0px 0px"
}
else{
    alert("Por favor selecione algo")
}

})
