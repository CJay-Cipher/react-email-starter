import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

const esemieLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/esemie_logos/esemie_logo_light-lg.png";
const twitterIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/twitter_X-sm.png";
const facebookIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/facebook-sm.png";
const instagramIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/instagram-sm.png";
const playStoreLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/app_icons/google_play_icon-sm.png";

export const FirstInvoice = () => (
  <Html>
    <Head />
    <Body
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Helvetica Neue", Ubuntu', backgroundColor: "#E5E7EB", margin: 0, padding: 0 }}
    >
      <Container style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        <Section style={{ width: "100%", height: "100px", padding: "5%", backgroundColor: "#0D3C6D" }}>
          <Row>
            <Column align="left" width="70%">
              <Button href="https://esemie.io">
                <Img alt="icon" src={esemieLogo} height="30" />
              </Button>
            </Column>
            <Column align="right">
              <Button href="https://twitter.com/esemie_io">
                <Img alt="icon" src={twitterIcon} width="20" />
              </Button>
            </Column>
            <Column align="right">
              <Button href="https://web.facebook.com/esemie.io">
                <Img alt="icon" src={facebookIcon} width="20" />
              </Button>
            </Column>
            <Column align="right">
              <Button href="https://www.instagram.com/esemie_io">
                <Img alt="icon" src={instagramIcon} width="20" />
              </Button>
            </Column>
          </Row>
        </Section>

        <Section style={{ width: "100%", padding: "5%", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "20px", borderRadius: "8px" }}>
            <Text style={{ fontSize: "16px", color: "black", marginTop: "0" }}>
              Dear <span style={{ fontSize: "16px", fontWeight: "600", color: "black" }}> [firstName],</span>
            </Text>
            <Text style={{ fontSize: "16px", color: "black" }}>
              Many business owners start their journey fueled by passion. But as you've likely discovered, passion alone isn't enough to keep a business booming.
            </Text>

            <Text style={{ fontSize: "16px", color: "black" }}>To grow and succeed, you need the right people, resources, and tools to support your vision.</Text>
            <Text style={{ fontSize: "16px", color: "black" }}>
              We built Esemie exactly for this purpose: <i style={{ fontWeight: "600" }}>to help you grow your business and keep it financially healthy. </i>
            </Text>
            <Text style={{ fontSize: "16px", color: "black" }}>You've taken the first step, by signing up a while back. Now, let's get you back on track!</Text>

            <Button
              style={{ backgroundColor: "#044E97", color: "#FFFFFF", fontWeight: "600", padding: "12px 30px", borderRadius: "5px", marginTop: "10px" }}
              href="https://app.esemie.io/register"
            >
              Create Your First Invoice Now
            </Button>
            <Row style={{ marginTop: "20px" }}>
              <Column style={{ color: "#1F2937", fontSize: "16px", fontWeight: "600" }}>Warmest regards,</Column>
            </Row>
            <Row>
              <Column style={{ color: "#1F2937", fontSize: "16px", fontWeight: "600" }}>Sandra from Esemie 🧡</Column>
            </Row>
          </Section>
        </Section>

        <Section style={{ width: "100%", backgroundColor: "#F2F4F7" }}>
          <Section style={{ padding: "5%", backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "400" }}>
            <Text>
              If you have any questions, feel free to contact{" "}
              <Link href="mailto:support@esemie.io" style={{ textDecoration: "underline" }}>
                support@esemie.io
              </Link>
            </Text>
            <Text>Want to take your business everywhere you go? Download the Esemie app in one tap!</Text>
            <Button href="https://play.google.com/store/apps/details?id=com.esemie">
              <Img src={playStoreLogo} height="40" alt="Play Store" />
            </Button>
            <Text>
              We'd love to keep the conversation going.{" "}
              <Link href="https://app.esemie.io/settings?tab=subscription" style={{ textDecoration: "underline" }}>
                Update your settings
              </Link>{" "}
              to customize the emails you receive from us.
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default FirstInvoice;
