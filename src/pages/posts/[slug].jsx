import { getPrismicClient } from "../../services/prismic"
import { RichText } from "prismic-dom"
import styles from "./styles.module.scss"

export default function Post({post}){
    return(

        <>
        <title>{post.title}</title>
        <main className={styles.postList}>
            <article>
                <h1>{post.title}</h1>
                <time>{post.updatedAt}</time>

                <div 
                className={styles.styledContent}
                dangerouslySetInnerHTML={{__html: post.content}}
                />
            </article>
        </main>
        </>
    )
}


export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const prismic = getPrismicClient();

    const response = await prismic.getByUID("post", String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        img: response.data.content.find(content => content.type == "image").url,
        updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
        
    }

    return{
        props:{
          post
        }
      }
}