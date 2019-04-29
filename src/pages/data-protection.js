import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Data Protection" />
    <Section>
      <H2>Data Protection</H2>
      <P>
        <H3>This site</H3>
        We consider data protection to be very important. Therefore, the use of this website is possible without offering person-related information.
        This site is a personal and non-commercial website organized and maintained by Dr. Ulrich Anders for the purpose of teaching at Cologne Business 
        School. As such this site has no intention to gather and process any person-related data. Therefore this site in itself does not use Google analytics,
        trackers, advertising or marketing hooks. Furthermore, this site does not offer newsletters or contact forms and the owner of this site does not store 
        any person-related information in connection to this site.
        <H3>Hosting and internet provider</H3>
        However, like all other websites this site is hosted by an internet provider. In the case of this site the internet provider is https://netlify.com. Netlify
        is using common internet technologies, such as cookies and web server logs for monitoring access to this website.
        Most internet providers are generating log files that usually contain the visitor’s browser type, language preference, referring site, additional websites requested,
        the date and time of each visitor request and potentially personally-identifying information like Internet Protocol (IP) addresses.
        The reason for doing so is to better understand how visitors use the website, and to monitor and protect the security of the website.
        Please read more about Netlify's privacy statement in order to find out about their approach to protecting data.
        <H3>Do not track</H3>
        In general, you can prevent the analysis of user behavior by blocking the use of cookies in your browser, for example by make an exception in the browser (such as Firefox browser).
        Please look in the program help for how this can be set up in your browser. Of course, you can also on occasion, in individual cases or periodically delete cookies in your browser 
        to clear tracking information. If you have activated the so-called Do-Not-Track function ("DNT") in your browser, then your visit to websites will not automatically be recorded by 
        web analysis tools. However, this does not work with every browser. To enable DNT in your browser, please check your browser's help function if you do not know how to activate it.
        <H3>Changes to the privacy policy</H3>
        We reserve the right to change this privacy policy.
        <H3>Inquires</H3>
        All inquires concerning the data protection for this website can be addressed to:
        <p>Moritz Bausch</p>
        <p>Dorothea-Erxleben Straße 31</p>
        <p>40721, Hilden</p>
      </P>
    </Section>
  </Layout>
)

export default DataProtectionPage
