import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title="About Personal Blog">
      <h1 className="text-5x1 border-b-4 pb-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Personal Blog</h3>
        <p>This is a blog built with Next JS. and Markdown</p>
        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}