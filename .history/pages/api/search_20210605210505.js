import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    // @todo - fetch from cache
  } else {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join('posts'), 'utf-8')
    })
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      frontmatter,
    }
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q)
  )

  res.status(200).json({ name: 'John Doe' })
}
