import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabsIconsProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }
}

export {};