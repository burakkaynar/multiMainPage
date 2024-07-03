const personelBtn = document.querySelector("#personel-btn")
const personelForm = document.querySelector("#personel-info")
const personelContent = document.querySelector("#personel-content")

personelForm.addEventListener("submit", (event) => {
    event.preventDefault()

    personelContent.classList.add("d-none")
})