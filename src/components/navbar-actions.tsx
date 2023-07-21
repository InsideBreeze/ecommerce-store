"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";
import { center } from "styled-system/patterns";

interface NavbarActionsProps {

};

const NavbarActions: React.FC<NavbarActionsProps> = () => {

    const items = useCart((state) => state.items);
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <button
            onClick={() => router.push("/cart")}
            className={center({
            ml: "auto",
            px: 4,
            py: 2,
            rounded: "full",
            bg: "black",
            color: "white",
            _hover: {
                cursor: "pointer"
            }
        })}>
            <ShoppingCart className={css({
                h: 5,
                w: 5,
                mr: 2
            })}/>
            {items.length}
        </button>
    );
};

export default NavbarActions;
