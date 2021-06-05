import Link from 'next/link'

export default function CategoryList({ categories }) {
  return (
    <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
      {categories}
    </div>
  )
}
