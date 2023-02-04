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
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    });

    // useCallbacks

    const setNewTime = useCallback(async () => {
        // console.log(dateTime);
        // console.log(countdownDate);
        if (countdownDate) {
            // console.log("pass");
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

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            var daysStr = `${days}`;
            var hoursStr = `${hours}`;
            var minutesStr = `${minutes}`;
            var secondsStr = `${seconds}`;

            // if (numbersToAddZeroTo.includes(hours)) {
            //     hoursStr = `0${hours}`;
            // }
            // if (numbersToAddZeroTo.includes(minutes)) {
            //     minutesStr = `0${minutes}`;
            // }
            // if (numbersToAddZeroTo.includes(seconds)) {
            //     secondsStr = `0${seconds}`;
            // }

            // console.log({
            //     days: daysStr,
            //     hours: hoursStr,
            //     minutes: minutesStr,
            //     seconds: secondsStr,
            // })

            setTime({
                days: daysStr,
                hours: hoursStr,
                minutes: minutesStr,
                seconds: secondsStr,
            });
        } else {
            setCountdownDate(new Date(dateTime).getTime());
        }
    }, [dateTime, countdownDate]);

    // useEffects

    useEffect(() => {
        // setNewTime();
        setInterval(() => setNewTime(), 1000);
    }, [setNewTime]);

    // useEffect(() => {
    //     console.log(new Date(dateTime).getTime())
    // }, [setNewTime]);

    

    return (
        <div className={styles["countdown-wrapper"]}>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Days</small>
                <div className={styles["time"] + " H3"}>{time.days || "0"}</div>
            </div>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Hours</small>
                <div className={styles["time"] + " H3"}>
                    {time.hours || "00"}
                </div>
            </div>

            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Minutes</small>
                <div className={styles["time"] + " H3"}>
                    {time.minutes || "00"}
                </div>
            </div>
            <div className={styles["time-section"]}>
                <small className={styles["small"] + " S2Medium"}>Seconds</small>
                <div className={styles["time"] + " H3"}>
                    {time.seconds || "00"}
                </div>
            </div>
        </div>
    );
}
