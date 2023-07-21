import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"
import { divider, grid, gridItem } from "styled-system/patterns";

interface ProductPageProps {
    params: {
        productId: string;
    }
};

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId);

    const products = await getProducts({ categoryId: product.category.id });

    return (
        <Container>
            <div className={grid({
                columns: {
                    lg: 2,
                    base: 1
                },
                gap: 5
            })}>
                <div className={gridItem({
                    colSpan: 1
                })}>
                    <Gallery images={product.images} />
                </div>

                <div>
                    <Info product={product} />
                </div>

            </div>

            <div className={divider({
                my: 10,
                color: "slate.200"
            })}/>


            <ProductList products={products} title="Related Products" />

        </Container>

    );
};

export default ProductPage;
