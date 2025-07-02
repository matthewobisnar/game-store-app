import type { PlatformModelV2 } from "@/entities/PlatformModelV2";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import type { SelectedPlatformStore } from "./SelectedPlatformStore";

const useSelectedPlatformStore = create<SelectedPlatformStore>(set => ({
  selectedPlatform: null,
  handleSelectedPlatform: (platform: PlatformModelV2) => set(() => ({selectedPlatform:platform}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedPlatformStore', useSelectedPlatformStore);
}

export default useSelectedPlatformStore;