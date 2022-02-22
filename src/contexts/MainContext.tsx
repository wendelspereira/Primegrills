import React, { useCallback } from 'react';
import { createContext, useState, ReactNode } from 'react';
import Card from '../components/Card/index'
import { ProductData } from "./ProductContext"

interface MainContextData {
    currentMenu: string;
    next: () => void;
    previous: () => void;
    cardsByCategory: object;
    products: [{}];
}

interface MainProviderProps {
    children: ReactNode;
    products: [{}];
}

export const MainContext = createContext({} as MainContextData);
export function MainProvider({ children, products }: MainProviderProps) {

    const _categories = new Set(products.map((prod: ProductData) => prod.category)) //Refatorar isso criando uma colection de categorias no banco =>Hello!
    const categories = []
    _categories.forEach((c) => categories.push(c))
    const productsByCategory = {}

    categories.map(cat => {
        productsByCategory[`${cat}`] = products.filter((prod: ProductData) => prod.category === cat)
    })

    // Cria e agrupas cards de produtos por categoriad
    const createCards = useCallback(() => {
        const cardsByCategory = {}
        categories.map(category => {
            cardsByCategory[category] = productsByCategory[category].map((prod: ProductData) => {
                return (<Card
                    key={prod._id}
                    description={prod.description}
                    id={prod._id}
                    imgSrc={prod.imgSrc}
                    isAvailable={prod.isAvailable}
                    name={prod.name}
                    price={prod.price}
                />)
            })
        })
        return cardsByCategory
    }, [categories, productsByCategory])

    const cardsObject = createCards()
    const [currentMenu, setCurrentMenu] = useState(categories[0]);
    const [cardsByCategory, setCards] = useState(cardsObject[categories[0]])

    const index = categories.indexOf(currentMenu)

    function previous() {
        setCurrentMenu(index > 0 ? categories[index - 1] : categories[categories.length - 1])
        setCards(cardsObject[index > 0 ? categories[index - 1] : categories[categories.length - 1]])
    }

    function next() {
        setCurrentMenu(index < categories.length - 1 ? categories[index + 1] : categories[0])
        setCards(cardsObject[index < categories.length - 1 ? categories[index + 1] : categories[0]])
    }

    return (
        <MainContext.Provider value={{
            currentMenu,
            next,
            previous,
            cardsByCategory,
            products
        }}>
            {children}
        </MainContext.Provider>
    );
}