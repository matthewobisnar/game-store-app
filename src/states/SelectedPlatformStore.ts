import type { PlatformModelV2 } from "@/entities/PlatformModelV2";


export interface SelectedPlatformStore {
  selectedPlatform: PlatformModelV2 | null;
  handleSelectedPlatform: (platform: PlatformModelV2) => void;
}
