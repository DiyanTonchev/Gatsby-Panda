import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <Link to='about/subabout'>Learn more</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`