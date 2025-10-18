import { Invoice } from '../models/invoice';

export const invoiceData: any = {
  id: 1,
  name: 'Pc Components',
  client: {
    name: 'John Doe',
    lastName: 'Smith',
    address: {
      country: 'USA',
      city: 'New York',
      street: '5th Avenue',
      number: '123',
    },
  },
  company: {
    name: 'Tech Solutions',
    fiscalCode: 44123512,
  },
  items: [
    {
      id: 1,
      product: 'Cpu Intel i9',
      price: 599,
      quantity: 1,
    },
    {
      id: 2,
      product: 'Corsair Teclado Mecanico',
      price: 399,
      quantity: 2,
    },
    {
      id: 3,
      product: 'Monitor Asus',
      price: 899,
      quantity: 3,
    },
  ],
};
