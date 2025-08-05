import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
        </div>
    );
}