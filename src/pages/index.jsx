import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="Welcome!!!"
      />
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>Home</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </div>
    </div>


  </Layout>
)

export default IndexPage
