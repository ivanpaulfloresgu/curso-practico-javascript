function formulaDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const verificarCupon = function () {
  const cupones = [10, 25, 50];
  const cupon = document.getElementById("cupones");
  const valueCupon = parseInt(cupon.value);
  if (valueCupon === cupones[0]) {
    return cupones[0];
  } else if (valueCupon === cupones[1]) {
    return cupones[1];
  } else if (valueCupon === cupones[2]) {
    return cupones[2];
  } else {
    return 0;
  }
};

function calcularPrecioConDescuento() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = parseInt(inputPrice.value);

  const InputDiscount = document.getElementById("InputDiscount");
  const discountValue = parseInt(InputDiscount.value);

  const verificacionCupon = verificarCupon();
  const descuentoCupon = discountValue + verificacionCupon;

  const precioConDescuento = formulaDescuento(priceValue, descuentoCupon);

  const resultDescuento = document.getElementById("resultDescuento");
  resultDescuento.innerText = "El descuento total es del : " +descuentoCupon+ "%\n El precio final es: S/. " + precioConDescuento ;
  

  
}

