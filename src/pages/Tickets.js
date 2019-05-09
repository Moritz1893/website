import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import MatchbannerHomberg from "../images/MatchbannerHomberg.png"
import MatchbannerBaumberg from "../images/MatchbannerBaumberg.png"
import MatchbannerEssen from "../images/MatchbannerEssen.png"
import MatchbannerRatingen from "../images/MatchbannerRatingen.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Tickets" />
    <Section>
      <H2 fontSize={[6]} lineHeight={[1.5]}>
        Tickets
      </H2>
      <H3>VfB 03 Hilden - VfB Homberg</H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            <img src={MatchbannerHomberg} altText="MatchbannerHomberg.png" />
          </p>
        </Box>
        <Box width={[1, 1 / 3]} pl={[0, 7]}>
          <p>
            Buchen Sie jetzt Ihre exklusiven Tickets für das Heimspiel gegen den Spitzenreiter VfB Homberg:
          <p></p>
            Stehplatz: 5€
          <p></p>
            Sitzplatz:  7€
          <p></p>
            Paket "Niemals Landesliga" (Sitzplatz+Bratwurst): 9€
          <p></p>
          </p>
        </Box>
      </Flex>
      <hr />
        <H3>SF Baumberg - VfB 03 Hilden</H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            <img src={MatchbannerBaumberg} altText="MatchbannerBaumberg.png" />
          </p>
        </Box>
        <Box width={[1, 1 / 3]} pl={[0, 7]}>
          <p>
            Buchen Sie jetzt Ihre exklusiven Tickets für das Auswärtsspiel gegen den Tabellenzweiten SF Baumberg:
           <p></p>
            Stehplatz: 5€
           <p></p>
            Sitzplatz:  7€
           <p></p>
            Paket VfB Olé (Stehplatz+Fanschal): 10€
           <p></p>
          </p>
        </Box>
      </Flex>
      <hr />
        <H3>VfB 03 Hilden - Schwarz-Weiß Essen</H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            <img src={MatchbannerEssen} altText="MatchbannerEssen.png" />
          </p>
        </Box>
        <Box width={[1, 1 / 3]} pl={[0, 7]}>
          <p>
            Buchen Sie ab dem 03.05.2019 Ihre exklusiven Tickets für das Heimspiel gegen den direkten Konkurrenten Schwarz-Weiß Essen:
           <p></p>
            Stehplatz: 5€
           <p></p>
            Sitzplatz:  7€
           <p></p>
            Paket "Leidenschaft" (Stehplatz+Trikot): 45€
           <p></p>
          </p>
        </Box>
      </Flex>
      <hr />
        <H3>Ratingen SV 04/19 - VfB 03 Hilden</H3>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 3]}>
          <p>
            <img src={MatchbannerRatingen} altText="MatchbannerRatingen.png" />
          </p>
        </Box>
        <Box width={[1, 1 / 3]} pl={[0, 7]}>
          <p>
            Buchen Sie ab dem 10.05.2019 Ihre exklusiven Tickets für das Auswärtsspiel gegen den Spitzenclub Ratingen SV 04/19:
           <p></p>
            Stehplatz: 5€
           <p></p>
            Sitzplatz:  7€
           <p></p>
            Paket "Saisonfinale" (Sitzplatz+Poster 2018/19): 10€
           <p></p>
          </p>
        </Box>
      </Flex>
       <H3>Allgemeine Tickethinweise</H3>
      <RespGrid min={"240px"}>
        <P>
          Bitte berücksichtigt, dass wir aufgrund der großen Erfolge der letzten
          Spiele und dem damit verbundenen Interesse nach Tickets für die letzten
          Saisonspiele nur noch max. zwei Tickets pro Mitglied verkaufen können.&nbsp; 
          <a href="mailto:moritz.bausch@cbs-mail.de?subject=Ticketanfrage">Hier Tickets anfragen</a>&nbsp; 
          Etwaige Weiterverkäufe von Tickets auf Plattformen von Drittanbietern 
          führen bei Identifizierung der Personen zum Ausschluss aus dem Verein 
          und somit auch zum Ausschluss aus den nächsten Ticketverkäufen.
        </P>
        <P>
          Die Verkaufphase für die Dauerkarten der Saison 2019/20 startet voraussichtlich
          am 17.06.2019 (KW 25). Bestehende Dauerkartenbesitzer haben Vorkaufsrecht, nach
          Ablauf der Frist zum 24.06.2019 haben dann auch Mitglieder die Möglichkeit Dauerkarten
          zu beantragen, ehe die restlichen Dauerkarten am 01.07.2019 in den freien Verkauf gehen.
          Es erfolgt zeitnah nochmal eine gesonderte Mitteilung.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
