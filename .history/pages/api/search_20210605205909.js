import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    // @todo - fetch from cache
  } else {
    const files = fs.readdirSync(path.join('posts'))
  }

  res.status(200).json({ name: 'John Doe' })
}
