import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import styles from './MainCards.module.scss';

export function MainCards() {

    const { cardsByCategory, next, previous} = useContext(MainContext);
    let [start, end] = [0, 0];

    function touchStart(evt) {
        start = evt.changedTouches[0].clientX
    }

    function toggleMenu(evt) {
        end = evt.changedTouches[0].clientX
        if (start < end) {
            previous()
        } else if (start > end) {
            next()
        }
    }

    return (
        <div
            className={styles.container}
            // onTouchStart={touchStart}
            // onTouchEnd={toggleMenu}
        >
            {/* {()=>next()} */}
            {cardsByCategory}
        </div>
    )
}