import api from "./api"
import { FinishData } from "../contexts/FinishContext"
import { orderData } from "../contexts/ProductContext"
import axios, { AxiosResponse } from "axios"

interface BuyData {
    orders: Array<orderData>;
    clientInformations: FinishData;
}

export async function sendBuy(buy: BuyData) {
    const response = await axios.post("/send", buy)
        .then((res: AxiosResponse<Response>) => res)
        .catch((err: AxiosResponse<Response>) => err)

    return response
}


