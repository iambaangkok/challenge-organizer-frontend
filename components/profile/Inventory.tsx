import { Pagination } from '@mui/material';
import styles from './css/Inventory.module.css';
import InventoryItem from './InventoryItem';

export default function Inventory() {
    return (
        <div
            className={
                styles.Inventory +
                ' ShadowContainer p-6 flex flex-col space-y-5'
            }
        >
            <div className="H3">Inventory</div>
            <div className="grid grid-rows-3 grid-cols-5 grid-flow-row gap-x-9 gap-y-3 self-center">
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
                <InventoryItem></InventoryItem>
            </div>

            <div className="self-center">
                <Pagination
                    count={10}
                    color="primary"
                    showFirstButton
                    showLastButton
                />
            </div>
        </div>
    );
}
