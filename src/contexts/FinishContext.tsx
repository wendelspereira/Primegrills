import { AxiosResponse } from 'axios';
import { createContext, ReactNode } from 'react';
import api from '../services/api';

export interface deliveryInfoData {
    adress: string;
    geoPosition: object;
    paymentMethod: string;
    requiredChange: boolean;
    changeFor: string;
}

export interface FinishData {
    name: string;
    deliveryMethod: string;
    deliveryInfo: deliveryInfoData;
    cellphone: string;
}

interface FinishContext {
    sendFinishData: (data: FinishData) => Promise<AxiosResponse<Response>>;
}

interface FinishProviderProps {
    children: ReactNode;
}

export const FinishContext = createContext({} as FinishContext);
export function FinishProvider({ children }: FinishProviderProps) {

    const sendFinishData = async (data: FinishData) => {
        const buy = {
            orders: JSON.parse(sessionStorage.getItem('orderListCache')),
            clientInformations: { ...data }
        }

        const response = await api.post("/send", buy)
        return response
    }




    return (
        <FinishContext.Provider value={
            {
                sendFinishData
            }}>
            {children}
        </FinishContext.Provider>
    );
}