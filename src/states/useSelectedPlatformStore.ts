import type { PlatformModel } from "@/hooks/usePlatformsQuery";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface SelectedPlatformStore {
  selectedPlatform: PlatformModel | null;
  handleSelectedPlatform: (platform: PlatformModel) => void;
}

const useSelectedPlatformStore = create<SelectedPlatformStore>(set => ({
  selectedPlatform: null,
  handleSelectedPlatform: (platform: PlatformModel) => set(() => ({selectedPlatform:platform}))
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool('useSelectedPlatformStore', useSelectedPlatformStore);
}

export default useSelectedPlatformStore;