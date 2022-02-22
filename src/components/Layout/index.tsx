import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Footer } from "../Footer/index";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.content}>
            {children}
            <Footer />
        </div>
    );
}