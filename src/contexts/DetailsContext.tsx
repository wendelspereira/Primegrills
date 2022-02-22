import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface DetailsContextData {
    product: {
        id: number,
        name: string,
        cardDescription: string,
        description: string,
        isFixedPrice: boolean,
        price: number,
        isAvailable: boolean,
        imgSrc: string,
        optionsComponent: [
            {
                type: 'checkbox' | 'select',
                name: string,
                options: [
                    { name: string, additionalPrice: number, isAvailable: boolean },
                ],
                freeAmount: number,
                allowedAmount: number,
            },
        ]
    };
    // products: product[];
}

interface DetailsProviderData {
    product: DetailsContextData
    children: ReactNode;
}

const product = null

export const DetailsContext = createContext({} as DetailsContextData);
export function DetailsProvider({ children }: DetailsProviderData) {
     return (
        <DetailsContext.Provider value={{
            product
        }} >
            {children}
        </DetailsContext.Provider>
    )
}

