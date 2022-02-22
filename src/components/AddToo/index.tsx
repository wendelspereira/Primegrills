import React, { useCallback } from 'react';
import styles from './AddToo.module.scss';
import { ProductData } from '../../contexts/ProductContext';
import Card from '../Card';

export default function AddToo(props: any) {
    const { title, data } = props
    const products = JSON.parse(data)

    const cards = useCallback(
        () => {
            const cards = []
            products.map((product: ProductData) => {
                cards.push(<Card
                    key={product._id}
                    description={product.description}
                    id={product._id}
                    imgSrc={product.imgSrc}
                    isAvailable={product.isAvailable}
                    name={product.name}
                    price={product.price}
                />)
            })
            return cards
        }, [products])

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.cards}>
                {cards()}
            </div>
        </div>
    )
}

// const takeTooType = {
    //     prime_artesanal: ['bebida', 'acai', 'sorvete'],
    //     prime_industrial: ['bebida', 'acai', 'sorvete'],
    //     prime_especial: ['bebida', 'acai', 'sorvete'],
    //     petiscos: ['bebidas', 'porcoes', 'sorvete'],
    //     porcoes: ['bebidas', 'acai', 'sorvete'],
    //     acai: ['petiscos', 'prime_industrial', 'prime_artesanal', 'prime_especial'],
    //     sorvete: ['petiscos', 'prime_industrial', 'prime_artesanal', 'prime_especial'],
    // }