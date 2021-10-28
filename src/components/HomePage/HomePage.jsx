import { Children } from "react"
import styles from "./home.module.scss"

export function HomePage(){
    return(
    <h1 className={styles.styledHome}> 
    {Children} </h1>)
}