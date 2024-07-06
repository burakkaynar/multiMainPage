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