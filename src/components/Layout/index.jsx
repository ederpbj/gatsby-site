import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"
import Menu from '../Menu'
import GlobalStyles from '../../styles/globalStyled'
import Footer from '../Footer';

const Layout = ({ children }) => {
  //Graphql
 /*  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <GlobalStyles />
      <Menu />
      Header
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
