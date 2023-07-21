"use client"
import { formatter } from "@/lib/utils";
import { Product } from "@/types";
import axios from "axios";
import { css } from "styled-system/css";
import { hstack } from "styled-system/patterns";

interface SummaryProps {
    items: Product[]
};

const Summary: React.FC<SummaryProps> = ({
    items
}) => {

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        });

        window.location = response.data.url;
    }
    return (
        <div className={css({
            mt: {
                base: 16,
                lg: 0
            },
            bg: "slate.100",
            p: {
                base: 4,
                sm: 6,
                lg: 8
            },
            rounded: "lg"
        })}>
            <h2 className={css({
                color: "slate.800",
                fontSize: "lg",
                fontWeight: "medium"
            })}>Order summary</h2>

            <div className={hstack({
                pt: 4,
                mt: 4,
                borderTop: "1px solid token(colors.slate.200)",
                justify: "space-between"
            })}>
                Order total
                <span className={css({
                    fontWeight: "semibold"
                })}>{
                    formatter.format(
                        items.reduce((acc, curr) => acc + Number(curr.price), 0)
                    )

                }
                </span>
            </div>

            <button
                disabled={items.length === 0}
                onClick={onCheckout}
                className={css({
                mt: 4,
                w: "full",
                rounded: "full",
                bg: "black",
                color: "white",
                py: 3,
                _hover: {
                    cursor: "pointer"
                },
                _disabled: {
                    opacity: "60%"
                }
            })}>
                Checkout
            </button>
        </div>
    );
};

export default Summary;
