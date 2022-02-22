import styles from './Card.module.scss';
import Link from 'next/link'

export interface CardData {
    key: string;
    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: Number;
    isAvailable: boolean;
}

export default function Card(props: CardData) {
    const [classe, nome, outroNome] = props.name.split(" ");

    return (
        <Link href={{
            pathname: "/details",
            query: { id: props.id },
        }}>
            <div className={styles.card}>
                <div className={styles.container}>
                    <img src={props.imgSrc} alt="" />
                    <div className={styles.cardDetail}>
                        <strong>{`${classe} ${nome}`}</strong>
                        {/* <strong>{classe}</strong> */}
                        {/* <br /> */}
                        {/* <strong>{nome}</strong> */}
                        {/* <br /> */}
                        {/* <strong>{outroNome}</strong> */}
                        <p className={styles.p}>{props.description}</p>
                        <h1>
                            {props.price.toLocaleString(
                                'pt-br',
                                { style: 'currency', currency: 'BRL' }
                            )}
                        </h1>
                    </div>
                </div>
            </div>
        </Link>
    )
}