/* PERSONEL */
const personelBtn = document.querySelector("#personel-btn")
const personelForm = document.querySelector("#personel-info")
const personelContent = document.querySelector("#personel-content")
/* PLAN */
const planBtn = document.querySelector("#plan-btn")
const planBack = document.querySelector("#plan-back")
const planContent = document.querySelector("#plan-content")
/* ADD-ONS */
const addOnBtn = document.querySelector("#addOn-btn")
const addOnBack = document.querySelector("#addOn-back")
const addOnsContent = document.querySelector("#addOns-content")
/* FINISH */
const finishContent = document.querySelector("#finish-content")
const finishBack = document.querySelector("#finish-back")
const finishBtn = document.querySelector("#finish-btn")
/* SUMMARY */
const summary = document.querySelector("#summary")
/* SVG ELEMENTS */
const num1h4Element = document.querySelector("#num1 h4")
const num2h4Element = document.querySelector("#num2 h4")
const num3h4Element = document.querySelector("#num3 h4")
const num4h4Element = document.querySelector("#num4 h4")
/* FINISHING UP */ 
const cardsElement = document.querySelectorAll(".card")
let planName = document.querySelector("#plan-name h4")
let priceElement = document.querySelector("#price h4")
const changeButton = document.querySelector("#plan-name p")
let priceh3Element = document.querySelector("total-price h3")
/* addons checkbox */
const extras = document.querySelectorAll(".extra")
const finishAppendExtras = document.querySelector("#extrasAppend")
/* yearly */
const yearCheck = document.querySelector("#checkYearly input")


yearCheck.addEventListener("change", (event) => {
    cardsElement.forEach(card => {
        const newPElement = document.createElement("p")
        newPElement.classList.add("cardp")
        
        if(event.target.checked){
            newPElement.innerHTML = "2 months free"
            card.append(newPElement)
        }
        else{
            const cardP = document.querySelector(".cardp")
            cardP.remove()
        }
    })

    const cardArcadeP = document.querySelector("#card-arcade p")
    const cardAdvancedP = document.querySelector("#card-advanced p")
    const cardProP  = document.querySelector("#card-pro p")
    const extraOnline = document.querySelector("#extra1 .extraPrice")
    const extraStorage = document.querySelector("#extra2 .extraPrice")
    const extraCustom = document.querySelector("#extra3 .extraPrice")
    

    if(event.target.checked){
        cardArcadeP.innerHTML = "$90/yr"
        cardArcadeP.setAttribute("value", 90)

        cardAdvancedP.innerHTML = "$120/yr"
        cardAdvancedP.setAttribute("value", 120)

        cardProP.innerHTML = "$150/yr"
        cardProP.setAttribute("value", 150)

        extraOnline.innerHTML = "$10/yr"
        extraOnline.setAttribute("value", 10)

        extraStorage.innerHTML = "$20/yr"
        extraStorage.setAttribute("value", 20)

        extraCustom.innerHTML = "$20/yr"
        extraCustom.setAttribute("value", 20)
    }
    else{
        cardArcadeP.innerHTML = "$9/mo"
        cardArcadeP.setAttribute("value", 9)

        cardAdvancedP.innerHTML = "$12/mo"
        cardAdvancedP.setAttribute("value", 12)

        cardProP.innerHTML = "$15/mo"
        cardProP.setAttribute("value", 15)

        extraOnline.innerHTML = "$1/mo"
        extraOnline.setAttribute("value", 1)

        extraStorage.innerHTML = "$2/mo"
        extraStorage.setAttribute("value", 2)

        extraCustom.innerHTML = "$2/mo"
        extraCustom.setAttribute("value", 2)
    }
})

cardsElement.forEach(card => {
    card.addEventListener("click", () => {
        card.style.backgroundColor = "var(--magnolia)"
        card.style.border = "1px solid var(--purplish-blue)"
        const cardValue = card.querySelector("p").getAttribute("value")

        planName.innerHTML = card.querySelector("h3").innerHTML
        priceElement.innerHTML = card.querySelector("p").innerHTML
        priceElement.setAttribute("value", cardValue)
    })
})
extras.forEach(extra => {
    const checkbox = extra.querySelector("input")
    const extraName = extra.querySelector("h3").innerHTML
    const extraPrice = extra.querySelector(".extraPrice").innerHTML
    const extraPriceHTML = extra.querySelector(".extraPrice")
    const extraValue = extraPriceHTML.getAttribute("value")

    let newDivExtra = document.createElement("div")
    newDivExtra.classList.add("extrasInfo")
    newDivExtra.innerHTML = `
    <p>${extraName}</p>
    <h5 value=${extraValue}>${extraPrice}</h5>
    `

    checkbox.addEventListener("change", (event) => {
        if(event.target.checked){
            finishAppendExtras.append(newDivExtra)
        }
        else{
            newDivExtra.remove()
        }
    })
})

addOnBtn.addEventListener("click", () => {
    let toplam = 0
    const planPrice = parseInt(document.querySelector("#price h4").getAttribute("value"))
    toplam += planPrice
    const extraPrice = document.querySelectorAll(".extrasInfo h5")
    extraPrice.forEach(price => {
        const priceValue = parseInt(price.getAttribute("value"))
        toplam += priceValue
    })
    console.log(toplam)
    const totalPriceElement = document.querySelector("#total-price h3")
    totalPriceElement.innerHTML = `$${toplam}/mo`
})

personelForm.addEventListener("submit", (event) => {
    event.preventDefault()
    personelContent.classList.add("d-none")
    planContent.classList.remove("d-none")

    num1h4Element.style.color = "var(--white)"
    num1h4Element.style.backgroundColor = "var(--svg-color)"

    num2h4Element.style.color = "var(--black)"
    num2h4Element.style.backgroundColor = "var(--pastel-blue)"
})

nextPage(planBtn, planContent, addOnsContent, num2h4Element, num3h4Element)
nextPage(addOnBtn, addOnsContent, finishContent, num3h4Element, num4h4Element)
nextPage(finishBtn, finishContent, summary)

previousPage(planBack, planContent, personelContent, num1h4Element, num2h4Element)
previousPage(addOnBack, addOnsContent, planContent, num2h4Element, num3h4Element)
previousPage(finishBack, finishContent, addOnsContent, num3h4Element, num4h4Element)

nextPage(changeButton, finishContent, planContent, num4h4Element, num2h4Element)

function nextPage(btn, firstContent, secondContent, numElement, numElement2){
    btn.addEventListener("click", () => {
        firstContent.classList.add("d-none")
        secondContent.classList.remove("d-none")

        numElement.style.color = "var(--white)"
        numElement.style.backgroundColor = "var(--svg-color)"

        numElement2.style.color = "var(--black)"
        numElement2.style.backgroundColor = "var(--pastel-blue)"
    })
}

function previousPage(btn, firstContent, secondContent, numElement, numElement2){
    btn.addEventListener("click", () => {
        firstContent.classList.add("d-none")
        secondContent.classList.remove("d-none")

        numElement.style.color = "var(--black)"
        numElement.style.backgroundColor = "var(--pastel-blue)"

        numElement2.style.color = "var(--white)"
        numElement2.style.backgroundColor = "var(--svg-color)"
    })
}
document.body.addEventListener("click", (event) => {
    cardsElement.forEach(card => {
        if(event.target != card){
            card.style.backgroundColor = "var(--white)"
            card.style.border = "1px solid var(--light-gray)"
        }
    })
})