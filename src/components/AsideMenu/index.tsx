import styles from './AsideMenu.module.scss';

export function AsideMenu() {

    function openNav() {
        document.getElementById("overlay").style.display = "inline";
        document.getElementById("Sidenav").style.transform = "translateX(0)";
    }

    function closeNav() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("Sidenav").style.transform = "translateX(-280px)";
    }

    return (
        <>
            <span className={styles.span} onClick={openNav}>
                <img src="icons/btn-aside-menu.svg" alt="Menu" />
            </span>
            <div>
                <div id="overlay" className={styles.overlay} onClick={closeNav}>
                </div>
                <div id="Sidenav" className={styles.sidenav}>
                    <div>
                        <a className={styles.closebtn} onClick={closeNav}>
                            <img src="icons/close.svg" alt="" />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <img src="icons/login.svg" alt="sobre" />
                            <a>Login</a>
                        </li>
                        <li>
                            <img src="icons/aboult.svg" alt="sobre" />
                            <a>Sobre</a>
                        </li>
                    </ul>
                    <div className={styles.rodape}>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    );
}