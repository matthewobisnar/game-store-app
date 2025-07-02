import type { OrderModel } from "./OrderModel";


export interface SelectedOrderStore {
  selectedOrder: OrderModel | null;
  handleSelectedOrder: (order: OrderModel) => void;
}
