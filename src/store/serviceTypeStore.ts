import { create } from 'zustand';

export type ServiceType = 'residential' | 'business';

interface ServiceTypeStore {
  type: ServiceType;
  setType: (type: ServiceType) => void;
}

export const useServiceTypeStore = create<ServiceTypeStore>((set) => ({
  type: 'residential',
  setType: (type) => set({ type })
}));