"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Product } from "@/types";
import { css } from "styled-system/css";
import { grid, hstack } from "styled-system/patterns";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
    item: Product
};

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})
const CartItem: React.FC<CartItemProps> = ({
    item
}) => {

    const cart = useCart();

    return (
        <div className={css({
            display: "flex",
            py: 6,
            borderBottom: "1px solid token(colors.slate.200)"
        })}>
            <div className={css({
                pos: "relative",
                h: {
                    base: 24,
                    sm: 48
                },
                w: {
                    base: 24,
                    sm: 48
                },
            })}>
                <Image
                    src={item.images?.[0].url}
                    alt="image"
                    fill
                    className={css({
                        rounded: "md"
                    })}
                />
            </div>

            <div className={css({
                ml: {
                    base: 4,
                    sm: 6
                },
                flex: 1,
                pos: "relative",
                display: "flex",
                flexDir: "column"
            })}>
                <div className={grid({
                    columns: {
                        base: 1,
                        sm: 2
                    },
                    gridColumnGap: 2
                })}>
                    <div>
                        <h2 className={css({
                            fontWeight: "semibold",
                            fontSize: "lg"
                        })}>{item.name}</h2>
                        <p className={css({
                            fontWeight: "semibold"
                        })}>{formatter.format(Number(item.price))}</p>
                    </div>

                    <div className={hstack({
                        alignItems: 'start',
                        color: "slate.600"
                    })}>
                        <p>{item.color.name}</p>
                        <p className={css({
                            pl: 4,
                            borderLeft: "1px solid token(colors.slate.200)"
                        })}>{item.size.name}</p>
                    </div>
                </div>
                    <IconButton
                        onClick={() => cart.removeItem(item.id)}
                    className={css({
                        pos: "absolute",
                        top: 0,
                        right: 0
                    })}
                    >
                        <X size={16} />
                    </IconButton>

            </div>
        </div>
    );
};

export default CartItem;
