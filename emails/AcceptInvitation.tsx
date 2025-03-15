import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

const esemieLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/esemie_logos/esemie_logo_light-lg.png";
const twitterIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/twitter_X-sm.png";
const facebookIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/facebook-sm.png";
const instagramIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/instagram-sm.png";
const playStoreLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/app_icons/google_play_icon-sm.png";

export const AcceptInvitation = () => (
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
            <Text style={{ color: "#0469C5", fontSize: "32px", fontWeight: "600", marginBottom: "20px", lineHeight: "1", marginTop: "0" }}>
              [businessName] invited you to manage their Esemie account.
            </Text>
            <Text style={{ fontSize: "20px", fontWeight: "500", color: "#475467" }}>
              Join them on Esemie to send invoices, track expenses, and level up your business.
            </Text>

            <Text style={{ fontSize: "16px", fontWeight: "500", color: "#475467" }}>Find below your account information</Text>
            <Row style={{ marginBottom: "10px" }}>
              <Column style={{ fontSize: "16px" }}>
                <span style={{ fontWeight: "600", color: "#475467", marginRight: "10px" }}>Email:</span>[emailAddress]
              </Column>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Column style={{ fontSize: "16px" }}>
                <span style={{ fontWeight: "600", color: "#475467", marginRight: "10px" }}>Password:</span>[password]
              </Column>
            </Row>
            <Text style={{ fontSize: "14px", color: "#475467" }}>Click below to log in and set up your account.</Text>
            <Button
              style={{ backgroundColor: "#044E97", color: "#FFFFFF", fontWeight: "600", padding: "12px 30px", borderRadius: "5px", marginTop: "10px" }}
              href="https://app.esemie.io/register"
            >
              Accept Invitation
            </Button>
            <Row style={{ marginTop: "30px" }}>
              <Column style={{ color: "#1F2937", fontSize: "16px", fontWeight: "600" }}>Welcome to Esemie!</Column>
            </Row>
            <Row>
              <Column style={{ color: "#1F2937", fontSize: "16px", fontWeight: "600" }}>Best regards,</Column>
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

export default AcceptInvitation;
