
import BtnBack from '../components/BtnBack/index';
import styles from '../styles/pages/Details.module.scss';
import { OptionsBlock } from "../components/Options/index";
import { Loading } from '../components/Loading/index';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ProductContext, ProductData } from '../contexts/ProductContext';
import { connectToDatabase } from '../utils/mongodb';
import { ObjectId } from 'mongodb';
import router from 'next/router';
import { Modal } from '../components/Modal';
import { AnimatePresence } from 'framer-motion';
import handler from './api/products';

export async function getServerSideProps({ query }) {

    let product = null
    try {
        const { db } = await connectToDatabase()
        const { id } = query
        const o_id = new ObjectId(String(id))
        const data = await db.collection('products').find({ "_id": o_id }).toArray()
        product = JSON.stringify(data)
    } catch (err) {
        throw err
    }
    return {
        props: { product }, // will be passed to the page component as props
    }
}

export default function Details(props) {
    const { order, setOrder } = useContext(ProductContext)
    const newOrder = { ...order }

    const product = JSON.parse(props.product)[0]
    if (!product) {
        return (
            <Loading />
        )
    }
    const { _id, name, description, price, imgSrc, optionsComponent } = product as ProductData

    newOrder.id = _id
    newOrder.name = name
    newOrder.description = description
    newOrder.price = price
    newOrder.imgSrc = imgSrc

    const [newPrice, setNewPrice] = useState(price)
    const [button, setButton] = useState(null)
    const [hasSelectedOptions, setHasSelectedOptions] = useState(false)


    //TEM MMMMMMMMUUUUUUUIIIIIIITTTTTAAAAA GAMBIARRA POR AQUI, IREI RESOLVER DEPOIS
    const handleSubmit = (e = null, permission = false) => {
        if (e) {
            setButton(e.target.name)
        }
        const productHasOptions = optionsComponent.length > 0

        if (productHasOptions && Object.keys(newOrder.config).length === 0 && !permission) {
            setHasSelectedOptions(true)
        } else {

            !hasSelectedOptions && setHasSelectedOptions(false)


            if (button === "buy" || !permission && e.target.name === "buy") {
                try {
                    setOrder(newOrder)
                } catch (err) {
                    throw err
                }
                router.push("/orders")
            }

            if (button === "add" || !permission && e.target.name === "add") {
                try {
                    setOrder(newOrder)
                } catch (err) {
                    throw err
                }
                router.push("/orderShipping")
            }
        }
    }

    return (
        <div className={styles.container}>
            <header >
                <BtnBack />
            </header>
            <section>
                <div>
                    <div className={styles.detail}>
                        <img src={imgSrc} alt="Produto" />
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <strong>
                            {newPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </strong>
                    </div>

                    <OptionsBlock product={product} newOrder={newOrder} newPrice={newPrice} setNewPrice={setNewPrice} />

                    <h3>Observações</h3>
                    <div className={styles.textarea}>
                        <textarea
                            id={`txta_${product._id}`}
                            style={{ resize: "none" }}
                            name="Observations"
                            maxLength={100}
                            placeholder='Há alguma observação sobre seu pedido?'
                            onChange={e => newOrder.observations = e.target.value}
                        >
                        </textarea>
                    </div>

                    <button onClick={handleSubmit} name="buy" className={styles.btnbuy}>
                        Comprar
                    </button>

                    <button onClick={handleSubmit} name="add" className={styles.btnAdd}>
                        Adicionar aos pedidos
                    </button>

                    <AnimatePresence>
                        <Modal close={() => setHasSelectedOptions(false)} state={hasSelectedOptions} customStyle={{ width: "70%", height: "15rem" }} arrasto={false} >
                            <div className={styles.alert}>
                                <div className={styles.header}>
                                    <p><strong>Ops... nenhuma opção foi selecionada</strong></p>
                                    <img src="icons/alert.svg" alt="atenção" />
                                </div>
                                <div className={styles.main}>
                                    <p>Tem certeza que deseja continuar sem escolher nenhuma opção?</p>
                                </div>
                                <div className={styles.footer}>
                                    <a onClick={() => handleSubmit(null, true)}>Continuar mesmo assim</a>
                                    <button onClick={() => setHasSelectedOptions(false)}>Voltar</button>
                                </div>
                            </div>
                        </Modal>
                    </AnimatePresence>
                    {/* <OtherOptions query={query} /> */}
                    {/* <TakeToo query={query} /> */}
                </div>
            </section>
        </div>
    )
}