import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "use-shopping-cart";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      // Connects to our Stripe account (stored in an .env.local file)
      stripe="pk_test_51R9C2cIyXKFritZtWUmPVnaIva3Cldfygmq7WiJj2DAJENNoklnv2f1GrRPgE5EWFM0fDjbkeloth6ZRAPEoI3E700cZnz8jrB"
      // Redirected here after successful payments (url stored in .env.local file)
      successUrl={`http://${process.env.NEXT_PUBLIC_URL}/success`}
      // Redirected here when you click back on Stripe Checkout (url stored in .env.local file)
      cancelUrl={`http://${process.env.NEXT_PUBLIC_URL}/?success=false`}
      currency="GBP"
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={["GB"]}
      // Enables local storage
      shouldPersist={true}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
} 