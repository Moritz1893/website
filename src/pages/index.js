import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, H3, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/VfBHildenMannschaft41.jpg"
import img01_21x9 from "../images/1440/21x9/VfBHildenMannschaft219.jpg"
import img01_16x9 from "../images/1200/16x9/VfBHildenMannschaft169.jpg"
import img01_3x2 from "../images/0800/3x2/VfBHildenMannschaft32.jpg"
import img01_4x3 from "../images/0480/4x3/VfBHildenMannschaft43.jpg"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Figure caption="Grafik: http://www.vfb-hilden.de/">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_4x3} alt="VfBHildenMannschaft43" />
      </picture>
    </Figure>
    <Section>
      <H3> Willkommen beim VfB 03 Hilden e.V.</H3>
      <P>Hier erfahrt Ihr alles rund um unseren Verein</P>
      <P>Wenn Ihr Fragen, Anregungen oder Kritik habt, schreibt mir gerne eine <a href="mailto:moritz.bausch@cbs-mail.de?subject=Fragen, Anregungen, Kritik">E-Mail</a>!</P>
    </Section>
  </Layout>
)

export default IndexPage
