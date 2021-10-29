import { getPrismicClient } from "../services/prismic"
import {RichText} from "prismic-dom"

export default function Home({post}) {

  return (
    <>
      <img src={post.img} alt="location image" />
      <h1>{post.title}</h1>
      <h3>{post.updatedAt}</h3>
      {post.content}
    </>     
      )
}


export const getStaticProps = async () => {
  const prismic = getPrismicClient()



  const response = await prismic.getByUID("post", "quem-sou-eu", {})
  
  


  const post = {
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    img: response.data.content.find(content => content.type == "image").url,
    
}
    
console.log(response.post)

  return{
    props:{
      post
    }
  }
}

