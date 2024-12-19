import React from 'react';
import { ProductGroup } from '../types/api';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, Check } from 'lucide-react';

interface ProductDisplayProps {
  productGroups: ProductGroup[];
  address: string;
}

export default function ProductDisplay({ productGroups, address }: ProductDisplayProps) {
  const { items, addItem, removeItem } = useCartStore();

  const isInCart = (productName: string) => {
    return items.some(item => item["Product Name"] === productName);
  };

  const handleProductAction = (product: any) => {
    if (isInCart(product["Product Name"])) {
      removeItem(product["Product Name"]);
    } else {
      addItem(product);
    }
  };

  const formatPrice = (price: string) => {
    return price.startsWith('€') ? price : `€${price}`;
  };

  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800">Installation Address</h3>
        <p className="text-green-700">{address}</p>
      </div>

      {productGroups.map((group, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold mb-2">{group["Product Type"]}</h2>
            <p className="text-gray-600">{group.Description}</p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.Products.map((product, idx) => (
                <div key={idx} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{product["Product Name"]}</h3>
                      {product["Value Offer"] && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">
                          {product["Value Offer"]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {product["Discount Price"] && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price (first {product["Discount Period"]})</span>
                        <span className="font-semibold text-green-600">{formatPrice(product["Discount Price"])}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Standard Price</span>
                      <span className="font-semibold">
                        {formatPrice(product["Standard Price"] || product["Monthly Price"] || "0")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contract</span>
                      <span>{product["Contract Duration"]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation</span>
                      <span>{product["Install Fee"]}</span>
                    </div>
                    {product["Download Speed"] && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Download Speed</span>
                        <span>{product["Download Speed"]}</span>
                      </div>
                    )}
                    {product["Upload Speed"] && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Upload Speed</span>
                        <span>{product["Upload Speed"]}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleProductAction(product)}
                    className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 transition ${
                      isInCart(product["Product Name"])
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-[#2f3676] hover:bg-[#1a1f4d] text-white'
                    }`}
                  >
                    {isInCart(product["Product Name"]) ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}