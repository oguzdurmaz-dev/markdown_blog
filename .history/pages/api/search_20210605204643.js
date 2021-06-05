import fs from 'fs'
import matter from 'gray-matter'

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
