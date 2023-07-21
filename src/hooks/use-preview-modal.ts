import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
    data: Product | undefined;
    open: boolean;
    onOpen: (data: Product) => void;
    onClose: () => void;
}
const usePreviewModal = create<PreviewModalStore>((set) => ({
    data: undefined,
    open: false,
    onOpen: (data) => set({ data, open: true }),
    onClose: () => set({ open: false })
}))

export default usePreviewModal;
