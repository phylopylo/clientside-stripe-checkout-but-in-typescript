import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'use-shopping-cart';
import Layout from './components/Layout';
import Home from './pages/Home';
import Success from './pages/Success';
import '/styles/globals.css';

function App() {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_test_51R9C2cIyXKFritZtWUmPVnaIva3Cldfygmq7WiJj2DAJENNoklnv2f1GrRPgE5EWFM0fDjbkeloth6ZRAPEoI3E700cZnz8jrB"
      successUrl={`${import.meta.env.VITE_BASE_URL}/success`}
      cancelUrl={`${import.meta.env.VITE_BASE_URL}/?success=false`}
      currency="USD"
      allowedCountries={["US"]}
      shouldPersist={true}
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App; 