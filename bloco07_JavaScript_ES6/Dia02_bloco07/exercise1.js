const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  console.log(
    `Olá ${deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  );
};
customerInfo(order);

const orderModifier = (order) => {
 const deliveryPerson = order.name = 'Luiz Silva';
 const pizzas = Object.keys(order.order.pizza);
 const bebidas = order.order.drinks.coke.type;
 const total = order.payment.total = '50,00'
  console.log(`Olá ${deliveryPerson}, o total do seu pedido de ${pizzas} e ${bebidas} é R$ ${total}`);
}

orderModifier(order);
