import { getPrismicClient } from "../services/prismic"
import Prismic from "@prismicio/client"
import {RichText} from "prismic-dom"

export default function Home({posts}) {

  return (


        posts.map(post => {
          return(
            <div key={post.slug}>
            <img src={post.img} alt="location image" />
            <h1>{post.title}</h1>
            <h3>{post.updatedAt}</h3>
            <p>{post.content}</p>
            </div>
          )
        })

  )
}



export const getStaticProps = async () => {
  const prismic = getPrismicClient()


  const response = await prismic.query(
    [
      Prismic.predicates.at("document.type", "post")
    ], {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
    
  )

  const posts = response.results.map(post => {
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      content: RichText.asText(post.data.content),
      img: post.data.content.find(content => content.type == "image").url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    }
  })


  return{
    props:{
      posts
    }
  }
}

