import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Menu = () => {
  const {logo} = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 32 height:32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    return(
        //<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand" to="/">
            <Img fixed={logo.childImageSharp.fixed} alt="Logo" />
          </Link>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="" activeStyle={{color: "red"}} className="nav-link" activeClassName="active" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" activeStyle={{color: "red"}} className="nav-link" activeClassName="active" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" activeStyle={{color: "red"}} className="nav-link" activeClassName="active" >Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" activeStyle={{color: "red"}} className="nav-link" activeClassName="active" >Contact</Link>
            </li>
            

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    
    )
}

export default Menu