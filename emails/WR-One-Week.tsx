import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

const esemieLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/esemie_logos/esemie_logo_light-lg.png";
const twitterIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/twitter_X-sm.png";
const facebookIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/facebook-sm.png";
const instagramIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/socials/instagram-sm.png";
const playStoreLogo = "https://esemie-assets.s3.eu-west-1.amazonaws.com/app_icons/google_play_icon-sm.png";
const blueArrow = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/right_arrow_blue-sm.png";
const chartIcon = "https://esemie-assets.s3.eu-west-1.amazonaws.com/icons/chart_icon.png";

export const OneWeek = () => (
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
            <Row style={{ paddingBottom: "10px" }}>
              <Column align="center" style={{ color: "#667085", fontSize: "16px", fontWeight: "600" }}>
                This report compares activities from <span style={{ color: "#000000" }}>2 weeks ago</span> vs <span style={{ color: "#000000" }}>last week</span>
              </Column>
            </Row>
            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#F2F1FE", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Cash Balance</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>
                  NGN 2,000,000 <span style={{ color: "#667085", fontSize: "16px", fontWeight: "600", paddingLeft: "5px" }}>Last week</span>
                </Column>
              </Row>
            </Section>

            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#E0EEFE", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Total Transactions</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>
                  13 <span style={{ color: "#667085", fontSize: "16px", fontWeight: "600", paddingLeft: "5px" }}>Last week</span>
                </Column>
              </Row>
            </Section>

            <Section style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ECFDF3", padding: "20px 50px", borderRadius: "10px", marginTop: "12px" }}>
              <Row>
                <Column style={{ color: "black", fontSize: "16px", textAlign: "center" }}>Net Profit</Column>
              </Row>
              <Row>
                <Column style={{ color: "black", fontWeight: "600", fontSize: "24px", textAlign: "center", paddingTop: "5px" }}>
                  NGN 2,000,000 <span style={{ color: "#667085", fontSize: "16px", fontWeight: "600", paddingLeft: "5px" }}>Last week</span>
                </Column>
              </Row>
            </Section>
            <Row>
              <Column align="center">
                <Button
                  style={{
                    fontSize: "15px",
                    backgroundColor: "#E0EEFE",
                    color: "#0469C5",
                    fontWeight: "600",
                    padding: "5px 15px",
                    borderRadius: "15px",
                    marginTop: "15px",
                  }}
                >
                  No data for last week to compare with
                </Button>
              </Column>
            </Row>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 0", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Section style={{ width: "100%", maxWidth: "400px", padding: "3%", borderRadius: "10px", marginTop: "12px", border: "1px solid #EAECF0" }}>
              <Row style={{ paddingBottom: "10px" }}>
                <Column align="center" style={{ color: "#000000", fontSize: "24px", fontWeight: "600" }}>
                  Budget Versus Expenses
                </Column>
              </Row>
              <Row>
                <Column align="left" style={{ color: "#2E2E2E", fontWeight: "500", fontSize: "16px" }}>
                  Budget vs Expenses
                </Column>
                <Column
                  align="right"
                  style={{
                    maxWidth: "100px",
                    textAlign: "center",
                    color: "#2E2E2E",
                    fontWeight: "500",
                    backgroundColor: "#F2F4F7",
                    fontSize: "16px",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  For September
                </Column>
              </Row>
              <Section style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", marginTop: "12px" }}>
                <Row>
                  <Column style={{ color: "black", fontSize: "14px", textAlign: "center" }}>Total Balance</Column>
                </Row>
                <Row>
                  <Column style={{ color: "black", fontWeight: "600", fontSize: "20px", textAlign: "center" }}>N150,000.00</Column>
                </Row>
              </Section>
              <Section style={{ marginTop: "30px" }}>
                <Row>
                  <Column style={{ width: "40%", height: "5px", backgroundColor: "#D92D20", borderRadius: "5px 0 0 5px" }}></Column>
                  <Column style={{ width: "60%", height: "5px", backgroundColor: "#12B76A", borderRadius: "0 5px 5px 0" }}></Column>
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
                    N250,000 <span style={{ color: "#667085" }}>(50%)</span>
                  </Column>
                  <Column align="right" style={{ color: "#12B76A", fontWeight: "500", fontSize: "14px" }}>
                    N1,000,000
                  </Column>
                </Row>
                <Row style={{ marginTop: "15px", width: "170px" }}>
                  <Column align="center" style={{ paddingRight: "30px", width: "80px" }}>
                    <Row>
                      <Column style={{ minWidth: "8px", height: "30px", backgroundColor: "#D92D20", borderRadius: "5px" }}> </Column>
                      <Column style={{ color: "black", fontWeight: "500", fontSize: "14px", paddingLeft: "7px" }}>Budget</Column>
                    </Row>
                  </Column>
                  <Column align="center" style={{ width: "80px" }}>
                    <Row>
                      <Column style={{ minWidth: "8px", height: "30px", backgroundColor: "#12B76A", borderRadius: "5px" }}> </Column>
                      <Column style={{ color: "black", fontWeight: "500", fontSize: "14px", paddingLeft: "7px" }}>Expenses</Column>
                    </Row>
                  </Column>
                </Row>
              </Section>
            </Section>
            <Section
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#F2F4F7",
                padding: "3%",
                borderRadius: "10px",
                marginTop: "12px",
                color: "#475467",
                fontSize: "16px",
                letterSpacing: "0.3px",
                lineHeight: "1.5",
              }}
            >
              Your expenses this week means you have <span style={{ color: "#000000", fontWeight: "600" }}> NGN20,000.00 </span> left of your August Budget.
            </Section>
            <Section
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#F2F4F7",
                padding: "3%",
                borderRadius: "10px",
                marginTop: "12px",
                color: "#475467",
                fontSize: "16px",
                letterSpacing: "0.3px",
                lineHeight: "1.5",
              }}
            >
              Invoices received this week brings your total invoices for August to
              <span style={{ color: "#000000", fontWeight: "600" }}> 20</span> at an average amount of
              <span style={{ color: "#000000", fontWeight: "600" }}> NGN 15,000.00</span>
            </Section>
            <Row style={{ marginTop: "20px" }}>
              <Column align="center">
                <Button
                  style={{
                    fontSize: "18px",
                    backgroundColor: "#E0EEFE",
                    color: "#475467",
                    fontWeight: "600",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                  href="https://app.esemie.io/settings?tab=expense"
                >
                  Explore Budget
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
            <Row style={{ paddingBottom: "5px" }}>
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
              <Section>
                <Row style={{ marginTop: "15px" }}>
                  <Column align="right" style={{ width: "130px", textAlign: "right", color: "#667085", fontWeight: "500", fontSize: "17px", paddingRight: "10px" }}>
                    Paid <span style={{ color: "#000000" }}>65%</span>
                  </Column>
                  <Column style={{ width: "150px", height: "15px" }}>
                    <div style={{ width: "65%", height: "100%", backgroundColor: "#3BF077", borderRadius: "0 3px 3px 0" }}></div>
                  </Column>
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <Column align="right" style={{ width: "130px", textAlign: "right", color: "#667085", fontWeight: "500", fontSize: "17px", paddingRight: "10px" }}>
                    Pending <span style={{ color: "#000000" }}>10%</span>
                  </Column>
                  <Column style={{ width: "150px", height: "15px" }}>
                    <div style={{ width: "10%", height: "100%", backgroundColor: "#FF8913", borderRadius: "0 3px 3px 0" }}></div>
                  </Column>
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <Column align="right" style={{ width: "130px", textAlign: "right", color: "#667085", fontWeight: "500", fontSize: "17px", paddingRight: "10px" }}>
                    Overdue <span style={{ color: "#000000" }}>20%</span>
                  </Column>
                  <Column style={{ width: "150px", height: "15px" }}>
                    <div style={{ width: "20%", height: "100%", backgroundColor: "#F04438", borderRadius: "0 3px 3px 0" }}></div>
                  </Column>
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <Column align="right" style={{ width: "130px", textAlign: "right", color: "#667085", fontWeight: "500", fontSize: "17px", paddingRight: "10px" }}>
                    Draft <span style={{ color: "#000000" }}>5%</span>
                  </Column>
                  <Column style={{ width: "150px", height: "15px" }}>
                    <div style={{ width: "5%", height: "100%", backgroundColor: "#D0D5DD", borderRadius: "0 3px 3px 0" }}></div>
                  </Column>
                </Row>
              </Section>
            </Section>
            <Section
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#F2F4F7",
                padding: "3%",
                borderRadius: "10px",
                marginTop: "12px",
                color: "#475467",
                fontSize: "16px",
                letterSpacing: "0.3px",
                lineHeight: "1.5",
              }}
            >
              Your most loyal client was <span style={{ color: "#000000", fontWeight: "600" }}> XYZ Corp </span> , with
              <span style={{ color: "#000000", fontWeight: "600" }}> 15</span> invoices paid.
            </Section>
            <Section
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#F2F4F7",
                padding: "3%",
                borderRadius: "10px",
                marginTop: "12px",
                color: "#475467",
                fontSize: "16px",
                letterSpacing: "0.3px",
                lineHeight: "1.5",
              }}
            >
              You've received <span style={{ color: "#000000", fontWeight: "600" }}> 30% (NGN 300,000.00) </span> of your potential income for Aug. It might be time to
              reach out to customers to receive payments for
              <span style={{ color: "#000000", fontWeight: "600" }}> 5</span> overdue invoices. Log In Now and Send reminders.
            </Section>
            <Row style={{ marginTop: "20px" }}>
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
                  href="https://app.esemie.io/invoices"
                >
                  Explore Invoice Report
                  <span style={{ marginLeft: "10px" }}>
                    <img src={blueArrow} alt="arrow" />
                  </span>
                </Button>
              </Column>
            </Row>
          </Section>
        </Section>

        <Section style={{ width: "100%", padding: "2% 3% 3%", backgroundColor: "#F2F4F7", color: "#4B5563" }}>
          <Section style={{ backgroundColor: "#FFFFFF", padding: "3%", borderRadius: "8px" }}>
            <Row style={{ paddingBottom: "5px" }}>
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
              <Row style={{ marginTop: "20px" }}>
                <Column style={{ width: "10%", height: "8px", backgroundColor: "#FEDF89", borderRadius: "5px 0 0 5px" }}></Column>
                <Column style={{ width: "18%", height: "8px", backgroundColor: "#12B76A" }}></Column>
                <Column style={{ width: "27%", height: "8px", backgroundColor: "#955BA5" }}></Column>
                <Column style={{ width: "45%", height: "8px", backgroundColor: "#F79009", borderRadius: "0 5px 5px 0" }}></Column>
              </Row>
              <Section>
                <Row style={{ marginTop: "20px" }}>
                  <Column align="left">
                    <Row>
                      <Column style={{ width: "10px", height: "10px", backgroundColor: "#FEDF89", borderRadius: "10px" }}></Column>
                      <Column style={{ color: "#2E2E2E", fontWeight: "400", paddingLeft: "5px" }}>Transportation</Column>
                    </Row>
                  </Column>
                  <Column align="right" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
                    NGN 550,000.00
                  </Column>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Column align="left">
                    <Row>
                      <Column style={{ width: "10px", height: "10px", backgroundColor: "#12B76A", borderRadius: "10px" }}></Column>
                      <Column style={{ color: "#2E2E2E", fontWeight: "400", paddingLeft: "5px" }}>Salaries</Column>
                    </Row>
                  </Column>
                  <Column align="right" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
                    NGN 550,000.00
                  </Column>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Column align="left">
                    <Row>
                      <Column style={{ width: "10px", height: "10px", backgroundColor: "#955BA5", borderRadius: "10px" }}></Column>
                      <Column style={{ color: "#2E2E2E", fontWeight: "400", paddingLeft: "5px" }}>Tax</Column>
                    </Row>
                  </Column>
                  <Column align="right" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
                    NGN 550,000.00
                  </Column>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Column align="left">
                    <Row>
                      <Column style={{ width: "10px", height: "10px", backgroundColor: "#F79009", borderRadius: "10px" }}></Column>
                      <Column style={{ color: "#2E2E2E", fontWeight: "400", paddingLeft: "5px" }}>Maintenance</Column>
                    </Row>
                  </Column>
                  <Column align="right" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>
                    NGN 550,000.00
                  </Column>
                </Row>
              </Section>
            </Section>
            <Section
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "#F2F4F7",
                padding: "3%",
                borderRadius: "10px",
                marginTop: "12px",
                color: "#475467",
                fontSize: "16px",
                letterSpacing: "0.3px",
                lineHeight: "1.5",
              }}
            >
              Transport remains your most frequent expense for the 3rd week in a row, amounting to{" "}
              <span style={{ color: "#000000", fontWeight: "600" }}> NGN15,000.00 </span> of your total expense this past week.
            </Section>
            <Row style={{ marginTop: "20px" }}>
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
                  href="https://app.esemie.io/expenses"
                >
                  Explore Expense Report
                  <span style={{ marginLeft: "10px" }}>
                    <img src={blueArrow} alt="arrow" />
                  </span>
                </Button>
              </Column>
            </Row>
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

export default OneWeek;
