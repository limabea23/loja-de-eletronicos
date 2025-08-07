import styles from "./Header.module.css";
import Image from "next/image";

export default function Header({ title, subtitle, totalProducts}) {
    return (
        <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.subtitle}>Total de produtos: {totalProducts}</p>
        </div>
    );
}