import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import imgLogo from "../images/VfB Wappen.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Tickets
      </H1>
      <p />
      <H3>VfB Stuttgart 1893 - Bayer 04 Leverkusen</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <img src={imgLogo} altText="VfB Wappen" />
      </Flex>
      <Section>
        <H3>Two columns achieved with CSS grid</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Occaecat aliqua excepteur labore anim quis aliquip. Do amet proident
          veniam dolore. Do non esse dolor nostrud in ipsum aliquip velit
          cupidatat esse dolor veniam aliqua. Pariatur enim exercitation eu
          occaecat. Occaecat reprehenderit reprehenderit cupidatat et fugiat
          veniam ea labore occaecat dolor magna.
        </P>
        <P>
          Cillum aliquip exercitation ut culpa sit. In ullamco aliqua occaecat
          pariatur officia qui magna labore aute. Consectetur irure est ex
          exercitation. Elit fugiat irure adipisicing elit tempor fugiat dolor
          esse occaecat. Dolor sint eu mollit et reprehenderit aute sunt dolor
          eu qui aliquip dolore reprehenderit magna.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
