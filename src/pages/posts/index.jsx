import { getPrismicClient } from "../../services/prismic"
import styles from "./posts.module.scss"
import Prismic from "@prismicio/client"
import { RichText } from "prismic-dom"
import Link from "next/link"

export default function Posts(props) {

  return (
    <>
      <title>Posts - Viajens</title>
      

    <main className={styles.container}>
      <div className={styles.postList}>

        <h1>Blog! Incríveis experiências.</h1>
        {props.posts.map(post => (
          <div key={post.slug} className={styles.post}>
            <Link href={`/posts/${post.slug}`}>
            <a>
            <time>{post.updatedAt}</time>
            <strong>{post.title}</strong>
            <p>{post.sumary}</p>
            </a>
          </Link>

          </div>
          
        ))}
        
      </div>
    </main>
    </>

  )
}


export const getStaticPaths = () => {
  return{
    paths: [],
    fallback: "blocking"
  }
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
      sumary: post.data.content.find(content => content.type == "paragraph")?.text ?? "", //nulish verify
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
    },
    revalidate: 86.400
  }
}

