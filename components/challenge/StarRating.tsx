import styles from './css/StarRating.module.scss';
import { useState, useEffect } from 'react';
import { Star, StarBorder, StarHalf } from '@mui/icons-material';

export interface StarRatingData {
    rating: number;
}

export default function StarRating({ rating }: StarRatingData) {
    const [stars, setStars] = useState<number[]>([0, 0, 0, 0, 0]);

    // useEffects

    useEffect(() => {
        const calculateStars = () => {
            var newStars: number[] = [];
            for (let i = 1; i <= 5; ++i) {
                if (rating >= i) {
                    newStars.push(1);
                } else if (rating >= i - 0.5) {
                    newStars.push(0.5);
                } else {
                    newStars.push(0);
                }
            }
            setStars(newStars);
        };

        calculateStars();

        return () => {};
    }, [rating]);

    return (
        <div className={styles['stars-wrapper']}>
            {stars.map((x, index) =>
                x === 1 ? (
                    <Star key={index} className={styles['star']} />
                ) : x === 0.5 ? (
                    <StarHalf key={index} className={styles['star']} />
                ) : (
                    <StarBorder key={index} className={styles['star']} />
                ),
            )}
        </div>
    );
}
