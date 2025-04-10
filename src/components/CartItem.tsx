import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    emoji: string;
    quantity: number;
    price: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { name, emoji, quantity, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center gap-4 mb-3">
      <p className="text-4xl">{emoji}</p>
      <div>
        {name} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">
        {formatCurrencyString({ value: price, currency: "GBP" })}
      </div>
      <button
        onClick={() => removeItemFromCart()}
        className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
      >
        <img alt="delete icon" src="/trash.svg" width={20} height={20} />
      </button>
    </div>
  );
} 