import { Category } from "@/types";
import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const getCategory = async (id: string): Promise<Category> => {
    const response = await axios.get(`${baseUrl}/categories/${id}`);
    return response.data;
}

export default getCategory;
