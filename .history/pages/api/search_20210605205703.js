import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default (req, res) => {
  console.log('Search posts')
  res.status(200).json({ name: 'John Doe' })
}
