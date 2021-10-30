import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Valores from "../components/Valores"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Valores />
  </Layout>
)

export default IndexPage
