import { createContext, ReactNode, useEffect, useState } from "react";
export interface OptionsComponentData {
    type: string;
    name: string;
    options: [
        {
            name: string;
            additionalPrice: number;
            isAvailable: boolean;
        }
    ]

}

export interface ProductData {
    _id: string;
    category: string;
    name: string;
    cardDescription: string;
    description: string;
    imgSrc: string;
    isAvailable: boolean;
    isFixedPrice: boolean;
    optionsComponent: [
        {
            type: string;
            name: string;
            options: [
                {
                    name: string;
                    additionalPrice: number;
                    isAvailable: boolean;
                }
            ]
        }
    ];

    price: number;
    options: any;
}

export interface orderData {
    id: string;
    name: string;
    description: string;
    imgSrc: string;
    price: number;
    amount: number;
    config: object;
    observations: string;
}

interface ProductContextData {
    orderList: orderData[];
    orderAmount: number;
    orderPriceSum: number;
    order: orderData;
    addOrder: () => void;
    setOrder: (order: orderData) => void;
    removeProduct: (index: number) => void;
    changeAmount: (index: number, value: number) => void;
    reset: () => void;
    orderClear: () => void;
    setOrderList: (orderList: orderData[]) => void;
}

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {

    useEffect(() => {
        const cache = JSON.parse(sessionStorage.getItem('orderListCache')) || []
        if (cache.length > 0) setOrderList(cache)
    }, [])

    const emptyOrder = {
        id: "",
        name: "",
        description: "",
        imgSrc: "",
        price: 0,
        amount: 1,
        config: {},
        observations: "",
    }

    const [orderList, setOrderList] = useState([]);
    const [order, setOrder] = useState(emptyOrder);
    const [orderAmount, setOrderAmount] = useState(0);
    const [orderPriceSum, setOrderPriceSum] = useState(0);

    useEffect(() => {
        order.id && addOrder()
    }, [order])


    function calcTotal() {
        let total = 0;
        orderList.map(item => {
            total += item.price * item.amount;
        })
        setOrderPriceSum(total);
    }

    function changeOrderAmount() {
        let amount = 0;
        orderList.map(order => {
            amount += order.amount;
        })
        setOrderAmount(amount)
    }

    function addOrder() {
        let newOrderList = [...orderList];
        newOrderList.push({ ...order });
        setOrderAmount(orderList.length);
        setOrderList(newOrderList)
        orderClear()
    }

    function removeProduct(index: number) {
        let newOrderList = [...orderList];
        newOrderList.splice(index, 1);
        setOrderList(newOrderList);
        setOrderAmount(orderList.length);
        calcTotal();
    }


    function changeAmount(index: number, value: number) {
        let newList = [...orderList]
        newList[index].amount = value;
        setOrderAmount(newList[index].amount);
        setOrderList(newList);
        calcTotal();
    }

    function orderClear() {
        setOrder(emptyOrder)
    }

    function reset() {
        setOrderList([])
        setOrderAmount(0)
        setOrderPriceSum(0)
        sessionStorage.clear()
    }


    // monitora se houve alguma adiçao ou remoçao de produto
    useEffect(() => {
        sessionStorage.setItem('orderListCache', JSON.stringify(orderList))
        changeOrderAmount()
        calcTotal()
    }, [JSON.stringify(orderList)])


    return (
        <ProductContext.Provider value={
            {
                addOrder, setOrder, removeProduct, reset, changeAmount,
                orderAmount, orderList, orderPriceSum, order, orderClear, setOrderList
            }}>
            {children}
        </ProductContext.Provider>
    );
}


