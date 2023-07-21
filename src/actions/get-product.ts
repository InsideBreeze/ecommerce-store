import { Product } from "@/types";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const getProduct = async (id: string): Promise<Product> => {
    const response = await axios.get(`${baseUrl}/products/${id}`);

    return response.data;
}

export default getProduct;
