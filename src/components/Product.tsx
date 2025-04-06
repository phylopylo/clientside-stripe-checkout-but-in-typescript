import { useState } from "react";
import { formatCurrencyString } from "use-shopping-cart";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    emoji: string;
    sku: string;
    currency: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();
  const { name, price, emoji } = product;
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    addItem(product, { count: quantity });
    setQuantity(1);
  };

  return (
    <article className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <div className="text-7xl mb-4" role="img" aria-label={name}>
          {emoji}
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">{name}</h2>
        <div className="text-xl font-semibold text-emerald-600 mb-4">
          {formatCurrencyString({ value: price, currency: "GBP" })}
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={addToCart}
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
} 