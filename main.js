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

personelForm.addEventListener("submit", (event) => {
    event.preventDefault()
    personelContent.classList.add("d-none")
    planContent.classList.remove("d-none")
})



nextPage(planBtn, planContent, addOnsContent)
nextPage(addOnBtn, addOnsContent, null)


previousPage(planBack, planContent, personelContent)
previousPage(addOnBack, addOnsContent, planContent)

/* MAIN */
function nextPage(btn, firstContent, secondContent){
    btn.addEventListener("click", () => {
        firstContent.classList.add("d-none")
        secondContent.classList.remove("d-none")
    })
}

function previousPage(btn, firstContent, secondContent){
    btn.addEventListener("click", () => {
        firstContent.classList.add("d-none")
        secondContent.classList.remove("d-none")
    })
}