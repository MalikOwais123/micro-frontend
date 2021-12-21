export interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  longDescription: string;
}

const products: product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'This is product 1',
    image: 'https://picsum.photos/200',
    category: 'Category 1',
    quantity: 10,
    longDescription: 'This is long description of product 1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'This is product 2',
    image: 'https://picsum.photos/200',
    category: 'Category 2',
    quantity: 20,
    longDescription: 'This is long description of product 2',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'This is product 2',
    image: 'https://picsum.photos/200',
    category: 'Category 2',
    quantity: 20,
    longDescription: 'This is long description of product 2',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description: 'This is product 3',
    image: 'https://picsum.photos/200',
    category: 'Category 2',
    quantity: 30,
    longDescription: 'This is long description of product 3',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    description: 'This is product ',
    image: 'https://picsum.photos/200',
    category: 'Category 4',
    quantity: 40,
    longDescription: 'This is long description of product 4',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 600,
    description: 'This is product 5',
    image: 'https://picsum.photos/200',
    category: 'Category 5',
    quantity: 2,
    longDescription: 'This is long description of product 5',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 400,
    description: 'This is product 6',
    image: 'https://picsum.photos/200',
    category: 'Category 6',
    quantity: 40,
    longDescription: 'This is long description of product 6',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
    description: 'This is product 7',
    image: 'https://picsum.photos/200',
    category: 'Category 7',
    quantity: 89,
    longDescription: 'This is long description of product 7',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
    description: 'This is product 8',
    image: 'https://picsum.photos/200',
    category: 'Category 8',
    quantity: 70,
    longDescription: 'This is long description of product 8',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
    description: 'This is product 9',
    image: 'https://picsum.photos/200',
    category: 'Category 9',
    quantity: 40,
    longDescription: 'This is long description of product 9',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 400,
    description: 'This is product 10',
    image: 'https://picsum.photos/200',
    category: 'Category 10',
    quantity: 22,
    longDescription: 'This is long description of product 10',
  },
];

export default products;
