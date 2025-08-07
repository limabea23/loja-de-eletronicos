import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    return (
    <div className={styles.card}>
    <img className={styles.img}
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
    />
    <h2>{product.title}</h2>
    <h2 className={styles.price}>{product.price}</h2>
    <p>{product.description}</p>
    <p className={styles.reviews}> {product.rating.reviews} avaliações</p>
    </div>
    );
}