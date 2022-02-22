import Link from 'next/link';
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import styles from './Footer.module.scss';

export function Footer() {
    const router = useRouter();
    const { orderAmount } = useContext(ProductContext);

    return (
        <div className={styles.containerFooter}>
            <div className={styles.containerButton}>
                <Link href="/">
                    <a className={`${router.asPath === "/" ?
                        styles.footerButtonActive : styles.footerButton}`
                    }>
                        <div className={styles.ButtonContent}>
                            <img src="icons/inicio.svg" alt="" />
                            <strong>Início</strong>
                        </div>
                    </a>
                </Link>
            </div>
                
            <div className={styles.containerButton} style={{opacity: "0.5", pointerEvents: "none"}}>
                {/* <Link href="/">[ ] */}
                    <a className={`${router.asPath === "/cupons" ?
                        styles.footerButtonActive : styles.footerButton}`
                    }>
                        <div className={styles.ButtonContent}>
                            <img src="icons/cupons.svg" alt="" />
                            <strong>Meus cupons</strong>
                        </div>
                    </a>
                {/* </Link> */}
            </div>
            <div className={styles.containerButton}>
                <Link href="/orders">
                    <a className={`${router.asPath === "/orders" ?
                        styles.footerButtonActive : styles.footerButton}`
                    }>
                        <div className={styles.ButtonContent}>
                            <div className={styles.orderCircleContainer}>
                                <img src="icons/pedidos.svg" alt="" />
                                <div className={orderAmount > 0 ?
                                    styles.orderCircle : styles.AmptyOrderCircle
                                }>
                                    <p>{orderAmount}</p>
                                </div>
                            </div>
                            <strong>Pedidos</strong>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
}