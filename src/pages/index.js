import * as React from "react"
import Bussiness from "../components/Bussiness"
import Comunity from "../components/Comunity"
import Footer from "../components/Footer"
import Funcionalidades from "../components/Funcionalidades"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Prices from "../components/Prices"
import SEO from "../components/seo"
import Subscribe from "../components/Subscribe"
import Valores from "../components/Valores"


const IndexPage = () => (
  <Layout>
    <SEO title="Vikkel" />
    <Hero />
    <Valores />
    <Funcionalidades />
    <Comunity />
    <Bussiness/>
    <Prices />
    <Subscribe />
    
  </Layout>
)

export default IndexPage
