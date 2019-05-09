import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import VfBHildenTrikotHeim from "../images/VfBHildenTrikotHeim.jpg"
import VfBHildenTrikotAuswaerts from "../images/VfBHildenTrikotAuswaerts.jpg"
import VfBHildenTasche from "../images/VfBHildenTasche.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="Shop" />
    <Section>
      <H2 fontSize={[6]} lineHeight={[1.5]}>
        Shop
      </H2>
      <H3>Heimtrikot "Hexenkessel" 2018/19 </H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            Als weißes Trikot mit dem traditionellen Ritter-Wappen auf der Brust,
            besticht das neue Heimtrikot durch eine gelungene Kombination aus Nostalgie und Moderne.
           <p></p>
            Größen: S,M,L,XL,XXL
           <p></p>
            Preis: 50€ UVP
           <p></p>
            Spielerflock: +10€
           <p></p>
            Niederrhein-Liga Patch: +5€
           <p></p>
          </p>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 7]}>
          <p>
            <img src={VfBHildenTrikotHeim} altText="VfBHildenTrikotHeim.jpg" />
          </p>
        </Box>
      </Flex>
      <hr />
      <H3>Auswärtstrikot "Auswärtssieg" 2018/2019 </H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            Das neue Auswärtstrikot ist an die damaligen Trikots in den 1980er Jahren angelehnt,
            in denen man zweimal den Niederrheinpokal gewann und in der Regionalliga spielte. Es
            besticht durch seinen modernen Schnitt sowie atmungsaktiven Stoff.
           <p></p>
            Größen: S,M,L,XL,XXL
           <p></p>
            Preis: 40€ UVP
           <p></p>
            Spielerflock: +10€
           <p></p>
            Niederrhein-Liga Patch: +5€
           <p></p>
          </p>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 7]}>
          <p>
            <img src={VfBHildenTrikotAuswaerts} altText="VfBHildenTrikotAuswaerts.jpg" />
          </p>
        </Box>
      </Flex>
      <hr />
      <H3>Sporttasche "Cosmopolit" 2018/19</H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            Die Sporttasche zeichnet sich durch hervorragenden Tragekomfort,
            sowie universelle Einsetzbarkeit aus. Durch die einzigartige Gore-Tex
            Technologie übersteht diese Sporttasche auch Wind und Regen, was sie
            zu einem treuen Begleiter im Sport macht.
           <p></p>
            Farbe: Schwarz, Grau, Weiß
           <p></p>
            Preis: 30€ UVP
           <p></p>
          </p>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 7]}>
          <p>
            <img src={VfBHildenTasche} altText="VfBHildenTasche.jpg" />
          </p>
        </Box>
      </Flex>
      <hr />
      <H3>Allgemeine Shophinweise</H3>
      <RespGrid min={"240px"}>
        <P>
          Wenn Ihr Interesse an bestehenden Artikeln im Shop habt, schreibt mir bitte eine &nbsp;
          <a href="mailto:moritz.bausch@cbs-mail.de?subject=Fragen, Anregungen, Kritik">E-Mail</a>&nbsp;
          mit der jeweiligen Artikelnummer, Größe und Flock/Patch/Farbe abhängig vom Produkt.
          Bitte beachtet, dass beflockte und bepatchte Trikots vom Umtausch ausgeschlossen sind.
        </P>
        <P>
          Natürlich können Sie mit allen gängigen Bezahlformen Ihren Einkauf tätigen:
          PayPal, Überweisung, Lastschrift, Nachnahme, Vorkasse und Kreditkarte.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
