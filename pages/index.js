import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import Image from 'next/image'

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='description' content='Recent web development news.'/>
        <meta name="author" content="Ryan Roat"/>
      </Head>

      {/* render list of retrieved articles */}
      <ArticleList articles={articles}/>

    </div>
  )
}

// functions for data retrieval

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

