import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"

const article = ({article}) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

//articles/posts from local source
export const getStaticProps = async (context) => {
  const res= await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article 
    }
  }
}

export const getStaticPaths = async () => {
  const res= await fetch(`${server}/api/articles/`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}


// articles/posts from external source
// export const getServerSideProps = async (context) => {  // fetches data on every render
// export const getStaticProps = async (context) => {
//   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//   const articles = await res.json()

//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: {id: id.toString()}}))

//   return {
//     paths,
//     fallback: false
//   }
// }

export default article
