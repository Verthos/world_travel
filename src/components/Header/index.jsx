import Link from "next/link"
import styles from "./header.module.scss"
import {motion} from "framer-motion"
import { UpdatedCurrency } from '../Currency';


export function Header() {

    return(

        <motion.div initial="hidden" animate="visible" variants=
        {{
            hidden:{
                scale: 0.6,
                opacity: 0,
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: 0.1
                }
        }}}>

            <header id="header_ancor" className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1>World travel,</h1>
                    <h3 className={styles.headerSubtitle}>Nosso blog de viajens!</h3>
                </div>
                <UpdatedCurrency/>


                <div className={styles.navDiv}>
                    <ul>
                        <Link scroll={false} href="/posts/quem-sou-eu" ><a>Home</a></Link>
                        <Link scroll={false} href="/flights"><a>Encontre voos</a></Link>
                        <Link scroll={false} href="/posts"><a>Blog</a></Link>
                        <Link scroll={false} href="/roteiros"><a>Roteiros</a></Link>
                        <Link scroll={false} href="/sobre"><a>Sobre</a></Link>
                        <Link scroll={false} href="/shop"><a>Loja</a></Link>
                    </ul>
                </div>
            </header>
        </motion.div>
    )
}

// <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="home" smooth={true} duration={1000}></Link></li>
//TODO Componente para substituir as tags Link
//TODO Entender prefetch e se é necessário declar "The prefetch attribute is no longer needed"