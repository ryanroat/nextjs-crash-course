import Head from 'next/head'

const Meta = ({title, keywords, description, author}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      {/* TODO: check if keywords otherwise omit */}
      <meta name='keywords' content={keywords}/>
      <meta name='author' content={author}/>
      <meta name='description' content={description}/>
      <meta charSet='utf-8'/>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev Newz',
  author: 'Ryan Roat',
  description: 'Recent web development news.'
}
export default Meta
