"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import { css, cx } from "styled-system/css";
import { grid, gridItem } from "styled-system/patterns";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { useState, useEffect } from "react";

interface CartPageProps {

};

const CartPage: React.FC<CartPageProps> = () => {

    const cart = useCart();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    if (!isMounted) {
        return null;
    }
    return (
        <Container>
            <h1 className={css({
                fontSize: "3xl",
                fontWeight: "bold"
            })}>Shopping Cart</h1>

            <div className={cx(css({
                mt: 12,
            }), grid({
                columns: {
                    base: 1,
                    lg: 12,
                },
                columnGap: 12,
            }))}>
                <div className={gridItem({
                    colSpan: {
                        lg: 7,
                        base: 1
                    }
                })}>
                    {
                        cart.items.length > 0 ? (
                            cart.items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        ) : (
                                <div className={css({
                                    color: "slate.600"
                                })}>
                                    No items added to cart.
                                </div>
                        )
                    }
                </div>

                <div className={gridItem({
                    colSpan: {
                        lg: 5,
                        base: 1
                    }
                })}>
                    <Summary items={cart.items} />
                </div>
            </div>
        </Container>
    );
};

export default CartPage;
