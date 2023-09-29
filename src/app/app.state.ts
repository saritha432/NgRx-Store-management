import { Product } from "./product.model";

export interface AppState {
  readonly product: Product[];
}