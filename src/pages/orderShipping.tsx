import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import BtnBack from '../components/BtnBack';
import { ProductContext, ProductData } from '../contexts/ProductContext';
import styles from '../styles/pages/orderShipping.module.scss';
import { Loading } from '../components/Loading/index';
import AddToo from '../components/AddToo';
import { connectToDatabase } from '../utils/mongodb';

export async function getServerSideProps() {
    let data = null
    try {
        const { db } = await connectToDatabase()
        const _data = await db.collection('products').find().sort({ 'category': 1 }).toArray()
        data = JSON.stringify(_data)
    } catch (err) {
        throw err
    }
    return {
        props: { data }
    }
}

export default function orderShipping(props) {
    const [load, setLoad] = useState(false);
    const { orderList } = useContext(ProductContext);

    useEffect(() => {
        if (props.data) {
            setLoad(true)
        }
    }, [props])

    const order = orderList[orderList.length - 1];


    return (
        <>
            <div className={styles.container}>
                <header>
                    <BtnBack />
                </header>
                <section>
                    <div className={styles.ConfirmMsg}>
                        <div className={styles.wrapper}>
                            <strong>Adicionado com sucesso!</strong>
                            <div className={styles.content}>
                                <span className={styles.imgCircle}>
                                    {order && <img src={order.imgSrc} alt="imagem" />}
                                </span>
                                <div className={styles.presentation}>
                                    <h2>{order?.name}</h2>
                                    <p>{order?.description}</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/orders">
                            <button type="button">Visualizar pedidos</button>
                        </Link>
                    </div>

                    <div className={styles.OtherOptions}>
                        <section className={styles.orderList}>
                            {load ? <AddToo title="Aproveite e leve também" data={props.data} /> : <Loading />}
                        </section>
                        <section className={styles.orderList}>
                            {/* <OtherOptions title="Outras opções" /> */}
                        </section>
                    </div>
                </section>

            </div>
        </>
    );
}