import { ContainerProps } from "./types";
import styles from './container.module.css'

export default function Container(props: ContainerProps) {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}