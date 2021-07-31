import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a  className={articleStyles.card}>
        <h2 key={article.id}>{article.title}</h2>
      </a>
    </Link>
  )
}

export default ArticleItem
