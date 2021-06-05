import { useState, useEffect } from 'react'
import { faSearch } from 'react-icon/fa'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className="relative bg-gray-600 p-4">
      <div className="container mx-auto flex items-center justify-center md:justify-end">
        <div className="relative text-gray-600 w-72">
          <form></form>
        </div>
      </div>
    </div>
  )
}
