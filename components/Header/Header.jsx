import styles from "./Header.module.css";
import Image from "next/image";

export default function Header({ title, subtitle, totalProducts}) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src="/foto.jpg"
                    alt="Logo da loja"
                    width={400}
                    height={300}
                    priority
                />
            </div>

            <div className={styles.content}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}