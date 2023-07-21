import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

interface CartStore {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (itemId: string) => void;
    removeAll: () => void;
};

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (item: Product) => {
                const existingItems = get().items;
                if (existingItems.includes(item)) {
                    return toast.error("The product is already existed in the cart");
                }
                set({ items: [...existingItems, item] });
                return toast.success("Product added to the cart");
            },
            removeItem: (id: string) => set({
                items: get().items.filter((item) => item.id !== id)
            }),
            removeAll: () => set({ items: [] })
        }),
        {
            name: "items-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useCart;
