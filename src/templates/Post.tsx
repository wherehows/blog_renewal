import React from "react"

export default function Post(data:any) {
  console.log(data,9999);

  return (
      <div>123
      </div>
  )
}

// export const pageQuery = graphql``
//   query($path: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $path } }) {
//       html
//       frontmatter {
//         date
//         slug
//         title
//       }
//     }
//   }
// `

