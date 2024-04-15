function datosCliente() {
  let datosCliente = prompt(
    "Hola. Antes de empezar, ingresa tu 1er nombre y 1er apellido:"
  );
  alert("Hola " + datosCliente + "!");
}
datosCliente();

let inicio = prompt(
  "Hola. Por favor elija el número de lo que desea comprar:\n \n 1. Empanadas\n 2. Pizzas\n 3. Cancelar"
);

while (inicio != 3) {
  switch (inicio) {
    case "1":
      let empanada = prompt(
        "Elija que relleno de empanadas desea:\n 1. Humita\n 2. Pollo\n 3. Queso y Cebolla"
      );
      if (empanada === "1") {
        alert("Eligió humita");
      } else if (empanada === "2") {
        alert("Eligió pollo");
      } else if (empanada === "3") {
        alert("Eligió queso y cebolla");
      } else {
        alert("Opcion inválida");
      }
      break;
    case "2":
      let pizza = prompt(
        "De qué quiere la pizza?\n 1. Fugazzeta\n 2. Pepperonni\n 3. Hawaiana"
      );
      if (pizza === "1") {
        alert("Eligió fugazzeta");
      } else if (pizza === "2") {
        alert("Eligió Pepperoni");
      } else if (pizza === "3") {
        alert("Eligió hawaiana. Ya estamos llamando a la policia.");
      } else {
        alert("Opción inválida");
      }
      break;
    default:
      alert("No elegiste nada");
      break;
  }
  inicio = prompt(
    "Desea incluir algo más?\n \n 1. Empanadas\n 2. Pizzas\n 3. Cancelar "
  );
}
alert("Pedido cancelado!");
