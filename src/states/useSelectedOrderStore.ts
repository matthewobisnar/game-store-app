import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import type { SelectedOrderStore } from "../entities/SelectedOrderStore";
import type { OrderModel } from "@/entities/OrderModel";

const useSelectedOrderStore = create<SelectedOrderStore>(set => ({
  selectedOrder: null,
  handleSelectedOrder: (order: OrderModel) => set(() => ({selectedOrder:order}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedOrderStore', useSelectedOrderStore);
}

export default useSelectedOrderStore;