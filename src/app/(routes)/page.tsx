import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { css } from "styled-system/css";

interface HomePageProps {

};

const HomePage: React.FC<HomePageProps> = async () => {
    const billboard = await getBillboard("2d794463-6973-4561-a070-d6fb236f69f6");
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <Billboard billboard={billboard} />
            <ProductList products={products} title="Featured Products" />
        </Container>
    );
};

export default HomePage;
