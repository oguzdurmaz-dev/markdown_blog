import Link from 'next/link'
import Image from 'next/image'

export default function Post({ post, slug }) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        alt={post.title}
        src={post.cover_image}
        width={600}
        height={420}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{post.date}</span>
        <div>{post.category}</div>
      </div>
      <div className="mt-2">
        <Link href={`/blog/${slug}`}>
          <a className="text-2xl text-gray-700 front-bold hover:underline">
            {post.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
      </div>
    </div>
  )
}
