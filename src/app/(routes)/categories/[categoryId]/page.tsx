import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Filter from "@/components/filter";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { css } from "styled-system/css";
import { center, grid, gridItem } from "styled-system/patterns";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";
import MobileFilter from "@/components/mobile-filter";

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string
    }
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const colors = await getColors();
    const sizes = await getSizes();

    const category = await getCategory(params.categoryId);

    return (
        <Container>
            <div>
                <Billboard billboard={category.billboard} />

                <div className={css({
                    mt: 4,
                    display: {
                        lg: "grid"
                    },
                    gridTemplateColumns: {
                        lg: "repeat(5, minmax(0, 1fr))",
                    },
                    gridTemplateAreas: {
                        lg: "'f i i i i'"
                    },
                    gridColumnGap: {
                        lg: 5
                    }
                })}>

                    <MobileFilter colors={colors} sizes={sizes} />

                    <div className={css({
                        display: {
                            base: "none",
                            lg: "block"
                        },
                        gridArea: {
                            lg: "f"
                        }
                    })}>
                        <Filter
                            selectedKey="colorId"
                            name="colors"
                            data={colors}
                        />

                        <Filter
                            selectedKey="sizeId"
                            name="sizes"
                            data={sizes}
                        />

                    </div>

                    <div className={css({
                        gridArea: "i"
                    })}>
                        {
                            products.length > 0 ? (
                                <ProductList products={products} title="" />
                            ) : (
                                <div className={center({
                                    h: "full",
                                    color: "slate.800"
                                })}>
                                    Not result found
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CategoryPage;
