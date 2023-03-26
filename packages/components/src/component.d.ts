import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        YiButton: typeof components.Button;
        YiIcon: typeof components.Icon;
    }
}
export {};
