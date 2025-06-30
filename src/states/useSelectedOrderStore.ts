import type { OrderModel } from "@/contexts/StoreContextProvider";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface SelectedOrderStore {
  selectedOrder: OrderModel | null;
  handleSelectedOrder: (order: OrderModel) => void;
}

const useSelectedOrderStore = create<SelectedOrderStore>(set => ({
  selectedOrder: null,
  handleSelectedOrder: (order: OrderModel) => set(() => ({selectedOrder:order}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedOrderStore', useSelectedOrderStore);
}

export default useSelectedOrderStore;