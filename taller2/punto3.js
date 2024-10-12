const productos = [
    { nombre: 'Laptop', categoria: 'tecnología', precio: 1000 },
    { nombre: 'Smartphone', categoria: 'tecnología', precio: 600 },
    { nombre: 'Camisa', categoria: 'ropa', precio: 30 },
    { nombre: 'Teclado', categoria: 'tecnología', precio: 50 },
    { nombre: 'Zapatillas', categoria: 'ropa', precio: 80 }
  ];
  
  /*Filtrando los productos que cumplen con la categoría "tecnología"*/ 
  const filterTechProducts = (products) => {
    return products.filter(product => product.categoria === 'tecnología');
  };

  /*Aplicarle un descuento del 10% a los productos previamente filtrados*/
  const applyDiscount = (products) => {
    return products.map(product => ({
      ...product,
      precio: product.precio * 0.9,
    }));
  };

  /*Calculando el total de los precios con el descuento aplicado*/ 
  const calculateTotal = (products) => {
    return products.reduce((total, product) => total + product.precio, 0);
  };

const techProducts = filterTechProducts(productos);
const discountedProducts = applyDiscount(techProducts);
const totalPrice = calculateTotal(discountedProducts);

console.log('Productos de tecnología: ', techProducts);
console.log('Productos con descuento: ', discountedProducts);
console.log('Precio total: ', totalPrice); 
  