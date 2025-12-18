import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
const useWindowStore = create(
    immer((set) => ({
    windows : WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey,data=null) => 
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = true;
            // Ensure the newly opened window gets a z-index higher than any other window
            win.zIndex = state.nextZIndex + 1;
            win.data = data ?? win.data;
            state.nextZIndex += 2;
        }),
    closeWindow: (windowKey) => 
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),
    focusWindow: (windowKey) => 
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.zIndex = state.nextZIndex;
            state.nextZIndex += 1;
        }),
    }))
);
export default useWindowStore;