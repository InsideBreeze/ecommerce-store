import { ShoppingCart } from "lucide-react";

import { formatter } from "@/lib/utils"
import { Product } from "@/types";

import { css } from "styled-system/css";
import { divider, hstack } from "styled-system/patterns";

interface InfoProps {
    product: Product
};


const Info: React.FC<InfoProps> = ({
    product
}) => {
    return (
        <div>
            <h1 className={css({
                fontSize: "3xl",
                fontWeight: "bold"
            })}>{product.name}</h1>

            <p className={css({
                mt: 3,
                fontWeight: "semibold",
                fontSize: "2xl"
            })}>{formatter.format(Number(product.price))}</p>

            <div className={divider({
                my: 4,
                color: "slate.200"
            })} />

            <div className={hstack()}>
                <h3 className={css({
                    fontWeight: "semibold"
                })}>Size:</h3>
                <div>{product.size.name}</div>
            </div>

            <div className={hstack({
                mt: 6
            })}>
                <h3 className={css({
                    fontWeight: "semibold"
                })}>Color:</h3>
                <div className={css({
                    rounded: "full",
                    h: 5,
                    w: 5,
                    shadow: "xl"
                })}
                    style={{ backgroundColor: product.color.value }}
                />


            </div>
            <button className={hstack({
                mt: 10,
                py: 3,
                px: 5,
                rounded: "full",
                bg: "black",
                color: "white",
                _hover: {
                    cursor: "pointer",
                    opacity: "85%"
                }
            })}>
                Add To Cart
                <ShoppingCart size={18} />
            </button>

        </div>
    );
};

export default Info;
