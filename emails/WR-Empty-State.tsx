import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

const esemieLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/esemie_logos/esemie_logo_light-lg.png";
const twitterIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/twitter_X-sm.png";
const facebookIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/facebook-sm.png";
const instagramIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/instagram-sm.png";
const playStoreLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/app_icons/google_play_icon-sm.png";
const blueArrow = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/right_arrow_blue-sm.png";
const chartIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/chart_icon.png";
const emptypRecord = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/empty_record.png";

export const EmptyState = () => (
  <Html>
    <Head />
    <Body
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Helvetica Neue", Ubuntu', backgroundColor: "#E5E7EB", margin: 0, padding: 0 }}
    >
      <Container style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        <Section style={{ width: "100%", height: "100px", padding: "3%", backgroundColor: "#0D3C6D" }}>
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

        <Section style={{ width: "100%", padding: "2% 3% 0", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "10px", borderRadius: "8px" }}>
            <Text style={{ textAlign: "center", color: "#0469C5", fontSize: "32px", fontWeight: "600", marginBottom: "20px", lineHeight: "1", marginTop: "0" }}>
              Find Out How Your Business is Doing?
            </Text>
            <Text style={{ textAlign: "center", fontSize: "16px", fontWeight: "500", color: "#475467" }}>
              Stay updated with a quick roundup of your business activities and health, key insights and performance metrics.
            </Text>
            <Row>
              <Column align="center">
                <Button
                  style={{
                    fontSize: "18px",
                    backgroundColor: "#E0EEFE",
                    color: "#0469C5",
                    fontWeight: "600",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                  href="https://app.esemie.io/dashboard"
                >
                  Let's Go
                  <span style={{ marginLeft: "10px" }}>
                    <img src={blueArrow} alt="arrow" />
                  </span>
                </Button>
              </Column>
            </Row>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 0", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Row style={{ maxWidth: "150px", height: "50px", paddingBottom: "10px" }}>
              <Column align="center" style={{ width: "35px", paddingRight: "10px" }}>
                <img src={chartIcon} alt="chart" />
              </Column>
              <Column align="center" style={{ color: "#000000", fontSize: "24px", fontWeight: "600" }}>
                Overview
              </Column>
            </Row>
            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#F2F1FE", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Cash Balance</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>NGN --</Column>
              </Row>
            </Section>

            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#E0EEFE", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Total Transactions</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>0</Column>
              </Row>
            </Section>

            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ECFDF3", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Net Profit</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>NGN --</Column>
              </Row>
            </Section>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 0", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Row style={{ paddingBottom: "10px" }}>
              <Column align="center" style={{ color: "#000000", fontSize: "24px", fontWeight: "600" }}>
                Budget Versus Expenses
              </Column>
            </Row>
            <Section style={{ width: "100%", maxWidth: "400px", padding: "3%", borderRadius: "10px", marginTop: "12px", border: "1px solid #EAECF0" }}>
              <Row>
                <Column align="left" style={{ color: "#2E2E2E", fontWeight: "500", fontSize: "16px" }}>
                  Budget vs Expenses
                </Column>
                <Column
                  align="right"
                  style={{
                    maxWidth: "50px",
                    textAlign: "center",
                    color: "#2E2E2E",
                    fontWeight: "500",
                    backgroundColor: "#F2F4F7",
                    fontSize: "16px",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  Last week
                </Column>
              </Row>
              <Section align="center" style={{ width: "100%" }}>
                <Row>
                  <Column align="center">
                    <Img alt="icon" src={emptypRecord} width="80" style={{ marginTop: "35px", marginBottom: "15px" }} />
                  </Column>
                </Row>
                <Text style={{ textAlign: "center", fontSize: "16px", fontWeight: "600", color: "#000000" }}>No budget set yet</Text>
                <Row>
                  <Column align="center">
                    <Button
                      style={{
                        fontSize: "16px",
                        border: "2px solid #044E97",
                        color: "#2B69A7",
                        fontWeight: "600",
                        padding: "8px 25px",
                        borderRadius: "5px",
                        marginTop: "-10px",
                      }}
                      href="https://app.esemie.io/quotes"
                    >
                      Set your budget
                    </Button>
                  </Column>
                </Row>
              </Section>
              <Section style={{ marginTop: "30px" }}>
                <Row>
                  <Column style={{ width: "100%", height: "5px", backgroundColor: "#EAECF0", borderRadius: "0 5px 5px 0" }}></Column>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Column align="left" style={{ color: "#667085", fontWeight: "500", fontSize: "14px" }}>
                    Actual Expenses
                  </Column>
                  <Column align="right" style={{ color: "#667085", fontWeight: "500", fontSize: "14px" }}>
                    Monthly Budget
                  </Column>
                </Row>
                <Row style={{ marginTop: "5px" }}>
                  <Column align="left" style={{ color: "#D92D20", fontWeight: "500", fontSize: "14px" }}>
                    --
                  </Column>
                  <Column align="right" style={{ color: "#12B76A", fontWeight: "500", fontSize: "14px" }}>
                    --
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 0", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Row style={{ paddingBottom: "10px" }}>
              <Column align="center" style={{ color: "#000000", fontSize: "24px", fontWeight: "600" }}>
                Here Is What You Have On Invoice.
              </Column>
            </Row>
            <Section style={{ width: "100%", maxWidth: "400px", padding: "3%", borderRadius: "10px", marginTop: "12px", border: "1px solid #EAECF0" }}>
              <Row>
                <Column align="center" style={{ color: "#2E2E2E", fontWeight: "500", fontSize: "16px" }}>
                  Invoice Status
                </Column>
              </Row>
              <Section align="center" style={{ width: "100%" }}>
                <Row>
                  <Column align="center">
                    <Img alt="icon" src={emptypRecord} width="80" style={{ marginTop: "35px", marginBottom: "15px" }} />
                  </Column>
                </Row>
                <Text style={{ textAlign: "center", fontSize: "16px", fontWeight: "600", color: "#000000" }}>No invoices created this week</Text>
                <Row>
                  <Column align="center">
                    <Button
                      style={{
                        fontSize: "16px",
                        border: "2px solid #044E97",
                        color: "#2B69A7",
                        fontWeight: "600",
                        padding: "8px 25px",
                        borderRadius: "5px",
                        marginTop: "-10px",
                      }}
                      href="https://app.esemie.io/invoices"
                    >
                      Create your invoice
                    </Button>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 3%", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Row style={{ paddingBottom: "10px" }}>
              <Column align="center" style={{ color: "#000000", fontSize: "24px", fontWeight: "600" }}>
                Expense Report
              </Column>
            </Row>
            <Section style={{ width: "100%", maxWidth: "400px", padding: "3%", borderRadius: "10px", marginTop: "12px", border: "1px solid #EAECF0" }}>
              <Row>
                <Column align="center" style={{ color: "#2E2E2E", fontWeight: "500", fontSize: "16px" }}>
                  Expense Categories
                </Column>
              </Row>
              <Section align="center" style={{ width: "100%" }}>
                <Row>
                  <Column align="center">
                    <Img alt="icon" src={emptypRecord} width="80" style={{ marginTop: "35px", marginBottom: "15px" }} />
                  </Column>
                </Row>
                <Text style={{ textAlign: "center", fontSize: "16px", fontWeight: "600", color: "#000000" }}>No expense created in two weeks</Text>
                <Row>
                  <Column align="center">
                    <Button
                      style={{
                        fontSize: "16px",
                        border: "2px solid #044E97",
                        color: "#2B69A7",
                        fontWeight: "600",
                        padding: "8px 25px",
                        borderRadius: "5px",
                        marginTop: "-10px",
                      }}
                      href="https://app.esemie.io/expenses"
                    >
                      Create expense
                    </Button>
                  </Column>
                </Row>
              </Section>
            </Section>
          </Section>
        </Section>

        <Section style={{ width: "100%", backgroundColor: "#F2F4F7" }}>
          <Section style={{ padding: "3%", backgroundColor: "#FFFFFF", color: "#000000", fontWeight: "400" }}>
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

export default EmptyState;
