import { getPrismicClient } from "../../services/prismic"
import styles from "./shop.module.scss"
import Prismic from "@prismicio/client"
import {RichText} from "prismic-dom"
import Link from "next/dist/client/link"

export default function Items(props) {

  return (
    <>
      <title>Equipamentos</title>

      <main className={styles.container}>
      <div className={styles.itemList}>
      <p className={styles.introEquipamentos}>
        <b>Equipamentos indispensáveis</b>
      Acampar também significa se desconectar do mundo externo por alguns dias. 
      Mesmo se sua escolha for montar base em um camping estruturado, são poucos aqueles que têm uma oferta grande de tomadas e energia elétrica para todos – 
      ou até mesmo sinal para celular. Por isso, leve baterias extras, acessórios que funcionem com luz solar, 
      mapas (ou bússola se achar melhor) e um bom kit de primeiros socorros, porque nunca se sabe se você precisará de um curativo rápido.
      </p>

      {props.shopItems.map(item => {
        return(
          <div key={item.slug}>
            <h2>{item.title}</h2>
            <Link href="url"><img src={item.img} alt="item_image" /></Link>
          </div>  
        )
      })}

      </div>
    </main>
    </>

  )
}


export const getStaticProps = async () => {
  const prismic = getPrismicClient()


  const response = await prismic.query(
    [
      Prismic.predicates.at("document.type", "sho")
    ], {
      fetch: ["sho.title", "sho.content"],
      pageSize: 100,
    }
    
  )

    console.log(response.results)
  const shopItems = response.results.map(shopItem => {
    return{
      slug: shopItem.uid,
      title: RichText.asText(shopItem.data.title),
      img: shopItem.data.content.find(content => content.type == "image").url,

    }
  })

  return{
    props:{
      shopItems
      
    }
  }
}

