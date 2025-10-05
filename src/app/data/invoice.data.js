
export const invoice = {

  id: 1,
  name: 'Pc Components',
  client: {
    name: 'John Doe',
    lastname: 'Smith',
    address: {
      country: 'USA',
      city: 'New York',
      street: '5th Avenue',
      number: '123',
    }
  },
  company: {
    name: 'Tech Solutions',
    fiscalNumber: 44123512,
  },
  items: [
    {
      id: 1,
      product: 'CPU',
      price: 250,
      quantity: 1,
    }, {
      id: 2,
      product: 'Mecanical Keyboard',
      price: 300,
      quantity: 2,
    }, {
      id: 3,
      product: 'Monitor',
      price: 150,
      quantity: 3,
    }
  ]

}
