import { Billboard } from "@/types";
import axios from "axios"

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
    const response = await axios.get(`${baseUrl}/${id}`);

    return response.data;
}

export default getBillboard;
