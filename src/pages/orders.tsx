import React, { useContext, useState } from 'react';
import Link from 'next/link';
import BtnBack from '../components/BtnBack/index';
import styles from '../styles/pages/Resume.module.scss';
import CardResume from '../components/CardResume/index';
import { ProductContext } from '../contexts/ProductContext';

export default function Details() {
    const { orderPriceSum, orderList } = useContext(ProductContext);

    const [intire = 0, decimal = 0] =
        orderPriceSum.toFixed(2).toString().split(".");

    const hasOrders = orderList.length > 0

    return (
        <div className={styles.container}>
            <header >
                <BtnBack />
            </header>

            <section>
                <div className={styles.content}>
                    {hasOrders ? orderList.map((item, index) => {
                        return (
                            <div key={index.toString()} className={styles.selectedItems}>
                                <CardResume
                                    index={index}
                                    name={item.name}
                                    description={item.description}
                                    // options={item.options}
                                    price={item.price}
                                    imgSrc={item.imgSrc}
                                />
                            </div>
                        )
                    }) : (
                        <div className={styles.emptyList}>
                            <h1>Seu carrinho está vazio</h1>
                            <p>Varios produtos saborosos estão esperando por você na lá na tela inicial</p>
                            <a>Toque aqui para vê-los</a>
                        </div>
                    )}

                    {/* <div className={styles.takeToo}>
                        <TakeToo />
                        <OtherOptions title="Aproveite e leve também" />
                    </div> */}

                </div>
            </section>
            <div className={styles.total} >
                <div className={styles.content}>
                    <div>
                        <p>Total</p>
                        <p>{"R$ " + intire},<span>{decimal}</span></p>
                    </div>
                    <Link href="/finish">
                        <button style={!hasOrders ? {pointerEvents: "none", opacity: "0.5"} : {}}>Fechar pedido</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
