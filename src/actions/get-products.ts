import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

interface Query {
    isFeatured?: boolean;
    sizeId?: string;
    colorId?: string;
    categoryId?: string
}
const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: `${baseUrl}/products`,
        query: {
            ...query
        }
    })

    const response = await axios.get(url);

    return response.data;
}

export default getProducts;
