interface Product {
  name: string;
  id: string;
  price: number;
  image: string;
  currency: string;
  emoji: string;
  sku: string;
}

export const products: Product[] = [
  {
    name: 'Example Product: Noetica Mug',
    id: 'price_1RAlfYIyXKFritZtH9n34wC8',
    price: 50000,
    image: 'https://i.imgur.com/fjESh7a.jpg',
    currency: 'USD',
    emoji: '☕',
    sku: 'mug-001'
  },
  {
    name: 'Example Product: Noetica Shirt',
    id: 'price_1RAlhXIyXKFritZtikofN0tf',
    price: 50000,
    image: 'https://i.imgur.com/fjESh7a.jpg',
    currency: 'USD',
    emoji: '👕',
    sku: 'shirt-001'
  },
  {
    name: 'Example Product: Noetica Hoodie',
    id: 'price_1RAlhyIyXKFritZtcZ2Vg1zr',
    price: 50000,
    image: 'https://i.imgur.com/fjESh7a.jpg',
    currency: 'USD',
    emoji: '🧥',
    sku: 'hoodie-001'
  }
]; 