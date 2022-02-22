import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import styles from './Menu.module.scss';

export function Menu() {
    const {
        currentMenu,
        next,
        previous
    } = useContext(MainContext);

    return (
        <div className={styles.menu}>
            <div className={styles.button}>
                <button
                    onClick={previous}
                >
                    <img src="icons/esquerda.svg" alt="" />
                </button>
            </div>

            <div className={styles.title}>
                <p>{currentMenu}</p>
            </div>

            <div className={styles.button}>
                <button
                    onClick={next}
                >
                    <img src="icons/direita.svg" alt="" />
                </button>
            </div>
        </div>
    );
}