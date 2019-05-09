import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <Section>
      <H1>Impressum</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Verantwortlich</H3>
          <P>
            Moritz Bausch
            <br />
            {"Dorothea-Erxleben Straße 31, 40721 Hilden"}
            <br />
            {"moritz.bausch@cbs-mail.de"}
          </P>
        </Box>
        <Box>
          <H3>Credits</H3>
          <P>Ich danke Herrn Anders für die Bereitstellung des Templates dieser Website, die diese einzigartige Fanseite des VfB 03 Hilden e.V. erst möglich gemacht hat.</P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
