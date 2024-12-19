import { create } from 'zustand';
import { Product } from '../types/api';

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productName: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product) => 
    set((state) => ({
      items: [...state.items, product]
    })),
  removeItem: (productName) =>
    set((state) => ({
      items: state.items.filter(item => item["Product Name"] !== productName)
    })),
  clearCart: () => set({ items: [] })
}));