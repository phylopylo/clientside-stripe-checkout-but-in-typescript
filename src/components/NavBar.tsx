import { useShoppingCart } from "use-shopping-cart";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

export default function NavBar() {
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-gray-900">
              Fresh Market
            </span>
          </Link>
          <button 
            onClick={() => handleCartClick()}
            className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            aria-label="Shopping cart"
          >
            <img
              src="/cart.svg"
              width={24}
              height={24}
              alt=""
              className="h-6 w-6"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <ShoppingCart />
    </nav>
  );
} 