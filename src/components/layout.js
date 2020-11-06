import React from 'react'
import layoutStyles from './layout.module.css'
import { useStaticQuery, Link, graphql } from 'gatsby'

const ListLink = props => (
  <li className={layoutStyles.linkList}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
  return (
    <div
      className={layoutStyles.layout}>
      <header className={layoutStyles.header}>
        <Link to='/' className={layoutStyles.link}>
          <h3 className={layoutStyles.title}>{title || data.site.siteMetadata.title}</h3>
        </Link>
        <ul>
          <ListLink to='/'>Home</ListLink>
          <ListLink to='/about/'>About</ListLink>
          <ListLink to='/users'>Users</ListLink>
          <ListLink to='/contact/'>Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
