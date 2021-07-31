import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        // <h2 key={article.id}>{article.title}</h2>
        <ArticleItem key={ article.id } article={article} />
      ))}
    </div>
  )
}

export default ArticleList
