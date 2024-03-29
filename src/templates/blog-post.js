import React from "react"
import { Link, graphql } from "gatsby"
import { Heading } from "rebass"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import { H1, P } from "../components/VerticalRhythm"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Section>
          <Heading as="h1" fontSize={[2, 2]} mt={4}>
            {post.frontmatter.title}
          </Heading>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
          <ul
            style={{
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              <Link to={"/News"}>↑ Back to News</Link>
            </li>
          </ul>
        </Section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
