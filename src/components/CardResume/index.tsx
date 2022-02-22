import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import styles from './CardResume.module.scss';

interface CardResumeProps {
    index: number;
    name: string;
    description: string;
    // options: string;
    price: number;
    imgSrc: string;
}

export default function CardResume(props: CardResumeProps) {
    const { removeProduct, changeAmount, orderList } = useContext(ProductContext);
    const [classe, nome, outroNome] = props.name.split(" ");
    var qntd = orderList[props.index].amount;

    function toggleQntd(value: number) {
        qntd += value;
        if (qntd < 1) {
            qntd = 1;
            alert("Quantidade inválida");
        } else {
            changeAmount(props.index, qntd);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <h1>{classe}</h1>
                <h1>{nome}</h1>
                <h1>{outroNome}</h1>
                <img src={props.imgSrc} alt={props.name} />
            </div>

            <div className={styles.description}>
                <strong>{props.description}</strong>
                {/* <p>Acompanhamentos:</p>
                <p>{props.options}</p> */}
            </div>

            <div className={styles.price}>
                <strong>
                    {props.price.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'BRL' }
                    )}
                </strong>
                <div>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleQntd(-1)}
                    >
                        <img src="/icons/less.svg" alt="-" />
                    </span>
                    <span>{qntd}</span>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleQntd(1)}
                    >
                        <img src="/icons/add.svg" alt="+" />
                    </span>
                </div>
            </div>

            <div className={styles.close}>
                <span
                    className={styles.buttonClose}
                    onClick={() => removeProduct(props.index)}
                >
                    <img src="/icons/close.svg" alt="Fechar" />
                </span>
            </div>
        </div>
    );
}
