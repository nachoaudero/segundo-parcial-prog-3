import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css"

handleGetProductsToStore()
renderCategories()

//! POPUP
const buttonAdd = document.getElementById("buttonAddElement")
buttonAdd.addEventListener('click', () => {
  openModal()
})

const buttonCancel = document.getElementById("cancelButton")
buttonCancel.addEventListener('click', () => {
  closeModal()
})

const openModal = () => {
  const modal = document.getElementById("modalPopUp")
  modal.style.display = 'flex'
}

const closeModal = () => {
  const modal = document.getElementById("modalPopUp")
  modal.style.display = 'none'
}

//? Guardar o modificar elementos
const buttonAccept = document.getElementById("acceptButton")
buttonAccept.addEventListener('click', () => {
  handleSaveOrModifyElements()
})

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value
  const precio = document.getElementById("precio").value
  const img = document.getElementById("img").value
  const categoria = document.getElementById("categoria").value

  let object = {
    id: new Date().toISOString(),
    nombre,
    precio,
    img,
    categoria
  }

  setInLocalStorage(object)
  handleGetProductsToStore()

  closeModal()
}