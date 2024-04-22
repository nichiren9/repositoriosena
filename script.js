const products = [
    {
      nombre: "Manzana",
      precio: 1.50,
      peso: 150,
      color: "Rojo",
      añoFabricacion: 2023,
    },
    {
      nombre: "Banana",
      precio: 0.75,
      peso: 120,
      color: "Amarillo",
      añoFabricacion: 2023,
    },
    {
      nombre: "Uva",
      precio: 2.00,
      peso: 100,
      color: "Morado",
      añoFabricacion: 2023,
    },
    {
      nombre: "Naranja",
      precio: 1.20,
      peso: 180,
      color: "Naranja",
      añoFabricacion: 2023,
    },
  ];
  
  const cart = [];
  
  function addToCart(productId) {
    const productIndex = Number(productId.replace("product", "")) - 1;
    const selectedProduct = products[productIndex];
    cart.push(selectedProduct);
    updateCart();
  }
  
  function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let totalPrice = 0;
    let totalWeight = 0;
  
    cart.forEach((product, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <p>Nombre: ${product.nombre}</p>
        <p>Precio: $${product.precio.toFixed(2)}</p>
        <p>Peso: ${product.peso}g</p>
        <button onclick="removeItem(${index})">Eliminar</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
  
      totalPrice += product.precio;
      totalWeight += product.peso;
    });
  
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    document.getElementById("total-weight").textContent = `${totalWeight}g`;
  }
  
  function removeLastItem() {
    cart.pop();
    updateCart();
  }
  
  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }
  