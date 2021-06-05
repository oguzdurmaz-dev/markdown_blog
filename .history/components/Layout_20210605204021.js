import Head from 'next/head'
import Header from '@/components/Header'
import Search from '@/components/Search'
export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to My Personal Blog',
  keyword: 'javascript,react,next,mongo,markdown,strapi,wordpress',
  description: 'The best info and news in development',
}
