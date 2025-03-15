import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

const esemieLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/esemie_logos/esemie_logo_light-lg.png";
const twitterIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/twitter_X-sm.png";
const facebookIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/facebook-sm.png";
const instagramIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/instagram-sm.png";
const playStoreLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/app_icons/google_play_icon-sm.png";
const checkmarkIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/checkmark_orange-lg.png";

export const Welcome = () => (
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
            <Text style={{ color: "#1F2937", fontSize: "20px", fontWeight: "bold", marginBottom: "10px", marginTop: "0" }}>Welcome to Esemie!</Text>
            <Text style={{ fontSize: "16px", color: "black" }}>
              Hello, <span style={{ fontSize: "16px", fontWeight: "600", color: "black" }}> [FName],</span>
            </Text>
            <Text style={{ fontSize: "16px", color: "black" }}>
              Think about where your business should be in the next 5 to 10 years. Do you see growth? More customers? Bigger profits? Maybe even branches across the
              globe?
            </Text>
            <Text style={{ fontSize: "16px", color: "black" }}>
              Growth becomes within reach when you have strong financial control over your business. And that's what Esemie gives you! It's an accounting software that
              puts you in charge, making your business finances easier, clearer, and stress-free.
            </Text>
            <Section>
              <Text style={{ color: "#1F2937", fontSize: "18px", fontWeight: "bold" }}>With Esemie, you can:</Text>
              <Row style={{ marginBottom: "10px" }}>
                <Column style={{ paddingRight: "5px", width: "10px" }}>
                  <Img alt="icon" src={checkmarkIcon} width="15" />
                </Column>
                <Column style={{ fontSize: "14px", color: "black" }}>Send invoices and avoid delayed payments.</Column>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Column style={{ paddingRight: "5px", width: "10px" }}>
                  <Img alt="icon" src={checkmarkIcon} width="15" />
                </Column>
                <Column style={{ fontSize: "14px", color: "black" }}>Know when your business is making a profit or loss.</Column>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Column style={{ paddingRight: "5px", width: "10px" }}>
                  <Img alt="icon" src={checkmarkIcon} width="15" />
                </Column>
                <Column style={{ fontSize: "14px", color: "black" }}>Prevent inventory theft before it hurts your business.</Column>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Column style={{ paddingRight: "5px", width: "10px" }}>
                  <Img alt="icon" src={checkmarkIcon} width="15" />
                </Column>
                <Column style={{ fontSize: "14px", color: "black" }}>Identify unnecessary expenses eating into your profits.</Column>
              </Row>
              <Text style={{ color: "#1F2937", fontSize: "14px", fontWeight: "600", marginTop: "30px", lineHeight: "1.2" }}>
                Your business success starts with taking action. Let's take the first step together.
              </Text>
              <Button
                style={{ backgroundColor: "#FF6702", color: "#FFFFFF", fontWeight: "600", padding: "12px 30px", borderRadius: "5px", marginTop: "10px" }}
                href="https://app.esemie.io/register"
              >
                Get Started
              </Button>
              <Row style={{ marginTop: "20px" }}>
                <Column style={{ color: "#1F2937", fontSize: "14px", fontWeight: "600" }}>Rooting for your success,</Column>
              </Row>
              <Row>
                <Column style={{ color: "#1F2937", fontSize: "14px", fontWeight: "600" }}>Sandra from Esemie 🧡</Column>
              </Row>
            </Section>
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

export default Welcome;
