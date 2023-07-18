
import { Text } from "./Text";
import { IconAdd } from "./icons/iconAdd";
import { IconMinus } from "./icons/iconMinus";

import styles from "./Counter.module.css"
import { useState } from "react";

export const Counter = (props) => {
    const [value, setValue] = useState(10);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value <= 0) {
            return;
        }
        setValue(value - 1);
    };
    return (
        <div className={styles.wrapper}>
            <Text>
                {value} {props.text}
            </Text>
            <nav >
            <IconAdd onClick={handleIncrement}/>
            <IconMinus onClick={handleDecrement}/>
            </nav>
        </div>
        );
};