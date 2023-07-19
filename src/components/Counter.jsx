
import { Text } from "./Text";
import { IconAdd } from "./icons/iconAdd";
import { IconMinus } from "./icons/iconMinus";

import styles from "./Counter.module.css"


export const Counter = (props) => {

    return (
        <div className={styles.wrapper}>
            <Text>
                {props.count} {props.text}
            </Text>
            <nav >
            <IconAdd onClick={props.onDecrement}/>
            <IconMinus onClick={props.onIncrement}/>
            </nav>
        </div>
        );
};