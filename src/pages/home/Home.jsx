import React from "react"

import { Category } from "../../components/category/category"
import { Card } from "../../components/blog/card"
import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"

 const Home = () => {
  return (
    <>
    <Header/>
      {/*  <Slider />*/}
      <Category />
      <Card />
      <Footer/>
    </>
  )
}
export default Home;