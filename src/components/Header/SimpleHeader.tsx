import styles from './SimpleHeader.module.scss';
import { AsideMenu } from '../AsideMenu/index';

export function Header() {
    return (
        <div className={styles.containerHeader}>
            <div>
                <div className={styles.btnAsideMenu}>
                    <AsideMenu />
                </div>
                <div className={styles.logo}>
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className={styles.wallpaper}>
                    <img src="wallpaper.png" alt="Wallpaper" />
                </div>
            </div>
        </div>
    );
}