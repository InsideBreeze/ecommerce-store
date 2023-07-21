"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Currency from "./ui/currency";
import IconButton from "./ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

import { css, cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";

interface ProductCardProps {
    product: Product
};

const ProductCard: React.FC<ProductCardProps> = ({
    product
}) => {
    const previewModal = usePreviewModal();
    const router = useRouter();
    const cartStore = useCart();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        previewModal.onOpen(product);
    }

    const onAddCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        cartStore.addItem(product);
    };

    return (
        <div
            onClick={() => router.push(`/product/${product.id}`)}
            className={cx(css({
            p: 3,
            border: "1px solid token(colors.slate.200)",
            rounded: "lg",
            _hover: {
                cursor: "pointer"
            }
        }), "group")}>
            <div className={css({
                pos: "relative",
                aspectRatio: "square",
            })}>
                <Image src={product.images[0].url}
                    alt=""
                    fill
                    className={css({
                        rounded: "md",
                        objectFit: "cover"
                    })}
                />
                <div className={hstack({
                    pos: "absolute",
                    bottom: {
                        base: "16px",
                        lg: "10px"
                    },
                    left: "50%",
                    transform: "translateX(-50%)",
                    opacity: {
                        base: "0%",
                        _groupHover: "100%"
                    },
                    transition: "opacity, transform"
                })}>

                    <IconButton onClick={onPreview}
                    >
                        <Expand size={16} />
                    </IconButton>
                    <IconButton onClick={onAddCart}
                    >
                        <ShoppingCart size={16} />
                    </IconButton>

                </div>

            </div>

            <div className={css({
                my: 4
            })}>
                <h3 className={css({
                    fontWeight: "semibold",
                    fontSize: "xl"
                })}>{product.name}</h3>
                <p className={css({
                    color: "slate.600"
                })}>{product.category.name}</p>
            </div>
            <div>
                <Currency value={product.price} />
            </div>
        </div>
    );
};

export default ProductCard;
