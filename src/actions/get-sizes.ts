import axios from "axios";

import { Size } from "@/types";


const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getSizes = async (): Promise<Size[]> => {
    const response = await axios.get(`${baseUrl}/sizes`);

    return response.data;
}

export default getSizes;
