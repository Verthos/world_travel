import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { motion } from "framer-motion"

import "../../styles/global.scss"

function MyApp({ Component, pageProps, router }) {
  
  return (
    <>
    <Header/>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants ={{
      pageInitial:{
        opacity: 0
      },
      pageAnimate:{
        opacity: 1
      }
    }}>

    <Component {...pageProps} />
    <Footer/>
    </motion.div>
    
    </>
)
}

export default MyApp
