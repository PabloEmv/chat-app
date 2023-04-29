import styles from './buttonfollreq.module.css'

export default function ButtonRequest ({buttonType = 'true'}) {
    return (
        <button className={`${styles.button_request} ${buttonType ? styles.bg_blue : styles.bg_red}`}>
            {
                buttonType ? 'Aceptar' : 'rechazar'
            }
        </button>
    )
}