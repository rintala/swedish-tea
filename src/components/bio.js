/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          email
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social, email } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 75,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong>. Based in Stockholm with a passion
        for web development and creating elegant digital solutions.
        {` `}
        <a href={`https://github.com/${social.github}`}>
          Check out his projects on Github
        </a>
        , or watch{" "}
        <a href={`https://www.youtube.com/channel/UCo3Zr98jG8_qhNb8GE8AIEw/`}>
          Swedish Tea on Youtube
        </a>
        {/* , or get in touch at <a href={`mailto:${email}`}>{`${email}`}</a> */}
        .
      </p>
    </div>
  )
}

export default Bio
