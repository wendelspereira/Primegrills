import styles from './Loading.module.scss';

export function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.ldsRing}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Carregando</p>
            </div>
        </div>
    )
}