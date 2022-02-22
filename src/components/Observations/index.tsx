import styles from './Observations.module.scss'

export function Observations() {
    return (
        <div className={styles.container}>
            <h3>Observações</h3>
            <textarea
                style={{ resize: "none" }}
                name="Observations"
                maxLength={150}
                placeholder="Sou alérgico a leite e não quero verdura.">
            </textarea>
        </div>
    )
}

