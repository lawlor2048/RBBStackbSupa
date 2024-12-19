import React from 'react';
import { useCartStore } from '../store/cartStore';
import { X, ShoppingCart as CartIcon, AlertCircle, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OxLTqFXXUwvxXXXXXXXXXXXX');

export default function Cart() {
  const { items, removeItem, clearCart } = useCartStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Failed to initialize payment system');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session. Please try again.');
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      console.error('Checkout error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = item["Discount Price"] || item["Standard Price"] || item["Monthly Price"] || "0";
      return total + parseFloat(price.replace('€', ''));
    }, 0);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#2f3676] text-white p-4 rounded-full shadow-lg hover:bg-[#1a1f4d] transition"
      >
        <CartIcon className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b pb-4">
                        <div>
                          <h3 className="font-semibold">{item["Product Name"]}</h3>
                          <p className="text-sm text-gray-600">
                            {item["Contract Duration"]} contract
                          </p>
                          <p className="text-sm text-gray-600">
                            {item["Download Speed"] || item["Maximum Download Speed"]}
                          </p>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="font-semibold">
                            {item["Discount Price"] || item["Standard Price"] || item["Monthly Price"]}
                          </span>
                          <button
                            onClick={() => removeItem(item["Product Name"])}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t p-4">
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}
                  <div className="flex justify-between mb-4">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">€{calculateTotal().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="w-full bg-[#2f3676] text-white py-3 rounded-md hover:bg-[#1a1f4d] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Proceed to Checkout'
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}