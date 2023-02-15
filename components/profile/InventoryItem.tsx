import styles from './css/InventoryItem.module.css';
import Image from 'next/image';

export default function InventoryItem() {
    return (
        <div
            className={
                styles.InventoryItem +
                ' ShadowContainer relative overflow-hidden'
            }
        >
            <Image
                src="/pingpong.jpg"
                alt={'test'}
                fill
                style={{
                    objectFit: 'cover',
                }}
                className={styles.Img}
            />
            <div className="text-white">Item Name Placeholder</div>
        </div>
    );
}
