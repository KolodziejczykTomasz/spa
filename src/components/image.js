import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imgName, ...props }) => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          edges {
            node {
              fluid {
                originalName
                src
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return <p style={{color: 'black'}}>Brak obrazka</p>
      }
      return <Img fluid={image.node.fluid} {...props} />
    }}
  />
)

export default Image
