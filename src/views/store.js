import { handleGetProductLocalStorage } from "../persistence/localStorage"

export const handleGetProductsToStore = () => {
  const products = handleGetProductLocalStorage()
  handleRenderList(products)
}

export const handleRenderList = (products) => {
  const hamburguesas = products.filter((el) => el.categoria === "Hamburguesas")
  const papas = products.filter((el) => el.categoria === "Papas")
  const gaseosas = products.filter((el) => el.categoria === "Gaseosas")

  const renderProductsGroup = (productos, titulo) => {
    if (productos.length > 0) {
      const productosHTML = productos.map((producto, idx) => {
        return `
          <article class="products" id="product-${producto.categoria}-${idx}">
            <figure>
              <img src="${producto.img}" alt="${producto.nombre}" />
            </figure>
            <header>
              <h2>${producto.nombre}</h2>
            </header>
            <section class="products__props">
              <p>
                <b>Precio:</b> $${producto.precio}
              </p>
            </section>
          </article>
        `
      })
      return `
      <section class="store">
        <div class="store__title">
          <h3>${titulo}</h3>
        </div>
        <div class="store__products">
          ${productosHTML.join("")}
        </div>
      </section>
      `
    } else { return "" }
  }

  const storeContainer = document.getElementById("store")

  storeContainer.innerHTML = `
    ${renderProductsGroup(hamburguesas, "Hamburguesas")}
    ${renderProductsGroup(papas, "Papas")}
    ${renderProductsGroup(gaseosas, "Gaseosas")}
  `

  const addEvents = (productos) => {
    productos.forEach((prod, idx) => {
      const productContainer = document.getElementById(
        `product-${prod.categoria}-${idx}`
      )

      productContainer.addEventListener('click', () => {
        console.log("Producto activo ", prod)
      })
    });
  }

  addEvents(hamburguesas)
  addEvents(papas)
  addEvents(gaseosas)
}

