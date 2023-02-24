import styles from './css/InventoryItem.module.scss';
import Image from 'next/image';

export default function InventoryItem() {
    return (
        <div
            className={
                styles.InventoryItem +
                ' ShadowContainer relative overflow-hidden flex flex-col justify-end p-2'
            }
        >
            <Image
                src="/pingpong.jpg"
                alt={'test'}
                fill
                style={{
                    objectFit: 'cover',
                }}
                className={styles['Img']}
            />
            <div className="S1Bold">Item Name </div>
            <div className="S2Regular">Item Description</div>
        </div>
    );
}
