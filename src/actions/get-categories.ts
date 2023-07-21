import axios from "axios"

import { Category } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getCategories = async (): Promise<Category[]> => {

    const response = await axios.get(`${baseUrl}/categories`);

    return response.data;
}

export default getCategories;
