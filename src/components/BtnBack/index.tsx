import styles from './BtnBack.module.scss';
import Link from 'next/link';

interface BtnBackProps {
    href?: string;
}

export default function BtnBack(props: BtnBackProps) {
    const { href } = props

    return (
        <div className={styles.container}>
            <Link href={href || '/'}>
                <div>
                    <img src="icons/esquerda.svg" alt="icon" />
                    <span>Voltar</span>
                </div>
            </Link >
        </div>
    );
}