import styles from "./css/CountdownTimer.module.scss";
import { useState, useEffect, useCallback } from "react";

export interface CountdownData {
    dateTime: string;
    dateTimeFormat: "YYYY-MM-DDTHH:mm:ss.sssZ";
}

export default function Countdown({ dateTime, dateTimeFormat }: CountdownData) {
    const [countdownDate, setCountdownDate] = useState<number>(
        0
    );
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // useCallbacks

    const setNewTime = useCallback(async () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });
        } else {
            setCountdownDate(new Date(dateTime).getTime());
        }
    }, [dateTime, countdownDate]);

    // useEffects

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, [setNewTime]);

    return (
        <div className={styles["countdown-wrapper"]}>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Days</small>
                <div className={styles["time"] + " H3"}>{time.days || "0"}</div>
            </div>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Hours</small>
                <div className={styles["time"] + " H3"}>
                    {time.hours || "0"}
                </div>
            </div>

            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Minutes</small>
                <div className={styles["time"] + " H3"}>
                    {time.minutes || "0"}
                </div>
            </div>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Seconds</small>
                <div className={styles["time"] + " H3"}>
                    {time.seconds || "0"}
                </div>
            </div>
        </div>
    );
}
