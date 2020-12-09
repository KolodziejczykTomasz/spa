import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export default class Image extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Img
              fluid={
                data.allImageSharp.edges.find(element => {               
                  return (
                    element.node.fluid.src.split("/").pop() ===
                    this.props.imgsrc
                  )
                }).node.fluid
              }
            />
          )
        }}
      />
    )
  }
}
