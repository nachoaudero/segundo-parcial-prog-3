//? Aqui renderizaremos las categorias

export const renderCategories = () => {
  const ulList = document.getElementById("listFilter")

  ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `

  const liElements = ulList.querySelectorAll("li")

  liElements.forEach((el) => {
    el.addEventListener('click', () => {
      handleClick(el)
    })
  })

  const handleClick = (element) => {
    liElements.forEach((el) => {
      if (el.classList.contains('li_active')) {
        el.classList.remove('li_active')
      } else {
        if (element === el) {
          el.classList.add('li_active')
        }
      }
    })
  }
}