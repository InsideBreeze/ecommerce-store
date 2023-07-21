import { Product } from "@/types";
import ProductCard from "./product-card";
import { grid } from "styled-system/patterns";
import { css } from "styled-system/css";

interface ProductListProps {
    products: Product[];
    title: string;
};

const ProductList: React.FC<ProductListProps> = ({
    products,
    title
}) => {
    return (
        <div className={css({
            my: 5
        })}>

            <h2 className={css({
                fontWeight: "bold",
                fontSize: "2xl"
            })}>
                {title}
            </h2>
            <div className={grid({
                columns: {
                    base: 1,
                    sm: 2,
                    md: 3,
                    lg: 4
                },
                gap: 4,
                mt: 4
            })}>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;
