import axios from "axios";

import { Color } from "@/types";


const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getColors = async (): Promise<Color[]> => {
    const response = await axios.get(`${baseUrl}/colors`);
    return response.data;
}

export default getColors;
