import { Body, Button, Container, Head, Html, Img, Link, Row, Column, Section, Text } from "@react-email/components";
import * as React from "react";

export const Welcome = () => (
  <Html>
    <Head />
    <Body
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Helvetica Neue", Ubuntu', backgroundColor: "#E5E7EB", margin: 0, padding: 0 }}
    >
      <Container style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Section style={{ width: "100%", padding: "30px 5% 15px", backgroundColor: "#F5F6F7" }}>
          <Row style={{}}>
            <Column align="left">
              <Button href="https://esemie.io">
                <Img alt="icon" src="https://i.postimg.cc/k4qJXwtP/Esemie-Logo-1.png" height="26" />
              </Button>
            </Column>
            <Column align="right" style={{ fontSize: "18px", fontWeight: "600", color: "#4E4E4E" }}>
              INVOICE
            </Column>
          </Row>
          <Row style={{ padding: "5px 0" }}>
            <Column align="left" style={{ fontSize: "14px", fontWeight: "600", color: "#0084EA" }}>
              ESEMIE
            </Column>
            <Column align="right" style={{ fontSize: "16px", fontWeight: "600", color: "#4E4E4E" }}>
              INV-001
            </Column>
          </Row>
          <Row style={{}}>
            <Column align="left">
              <Row>
                <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>13A, Ikota Shopping Complex</Column>
              </Row>
              <Row>
                <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>Ajah, Lagos</Column>
              </Row>
              <Row>
                <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>+234 09010000000</Column>
              </Row>
              <Row>
                <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>RC: 9084632</Column>
              </Row>
            </Column>
            <Column align="right" style={{ paddingBottom: "40px" }}>
              <Row>
                <Column align="right" style={{ fontSize: "14px", fontWeight: "500", color: "#4E4E4E" }}>
                  Balance Due
                </Column>
              </Row>
              <Row>
                <Column align="right" style={{ fontSize: "16px", fontWeight: "600", color: "#0084EA" }}>
                  NGN 4,000
                </Column>
              </Row>
            </Column>
          </Row>
        </Section>

        <Section style={{ width: "100%", padding: "5%", backgroundColor: "#ffffff", color: "#4B5563" }}>
          <Section>
            <Row style={{}}>
              <Column align="left" style={{ width: "33%" }}>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E" }}>BILLED TO</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#212121", padding: "8px 0" }}>Kelly Audu</div>
              </Column>
              <Column align="center" style={{ width: "33%" }}>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E" }}>INVOICE DATE</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#212121", padding: "8px 0" }}>12th, August 2025</div>
              </Column>
              <Column align="right" style={{ width: "33%" }}>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E" }}>DUE DATE</div>
                <div style={{ fontSize: "14px", fontWeight: "600", color: "#212121", padding: "8px 0" }}>12th, August 2025</div>
              </Column>
            </Row>
            <Row>
              <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>Ilasan New Road, Ikate</Column>
            </Row>
            <Row>
              <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>Lekki,</Column>
            </Row>
            <Row>
              <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>Lagos State</Column>
            </Row>
          </Section>

          <Section style={{ paddingTop: "5%" }}>
            <Row style={{}}>
              <Column align="center" style={{ width: "10%" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#212121", backgroundColor: "#D0D5DD", padding: "5px 15px 5px 0" }}>#</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 15px 8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  1
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 15px 8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  2
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 15px 8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  3
                </div>
              </Column>
              <Column align="left" style={{ width: "35%" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#212121", backgroundColor: "#D0D5DD", padding: "5px 0" }}>Item(s) and Description</div>
                <div style={{ height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  <div style={{ fontSize: "12px", fontWeight: "500", color: "#212121" }}>Tooth Brush</div>
                  <div style={{ fontSize: "10px", fontWeight: "400", color: "#212121" }}>Medium size</div>
                </div>
                <div style={{ height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  <div style={{ fontSize: "12px", fontWeight: "500", color: "#212121" }}>Tooth Brush</div>
                  <div style={{ fontSize: "10px", fontWeight: "400", color: "#212121" }}>Medium size</div>
                </div>
                <div style={{ height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  <div style={{ fontSize: "12px", fontWeight: "500", color: "#212121" }}>Tooth Brush</div>
                  <div style={{ fontSize: "10px", fontWeight: "400", color: "#212121" }}>Medium size</div>
                </div>
              </Column>
              <Column align="left" style={{ width: "10%" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#212121", backgroundColor: "#D0D5DD", padding: "5px 0" }}>Qty</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>4</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>4</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>4</div>
              </Column>
              <Column align="left" style={{ width: "22%" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#212121", backgroundColor: "#D0D5DD", padding: "5px 0" }}>Rate</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 1,000.00
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 1,000.00
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 1,000.00
                </div>
              </Column>
              <Column align="left" style={{ width: "20%" }}>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#212121", backgroundColor: "#D0D5DD", padding: "5px 0" }}>Amount</div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 4,000.00
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 4,000.00
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400", color: "#212121", height: "38px", padding: "8px 0", borderBottom: "1px solid #D0D5DD" }}>
                  ₦ 4,000.00
                </div>
              </Column>
            </Row>
          </Section>

          <Section style={{ paddingTop: "5%" }}>
            <Row>
              <Column align="left" style={{ width: "35%" }}>
                <Row>
                  <Column align="left" style={{ backgroundColor: "#F5F6F7", padding: "10px", borderRadius: "5px" }}>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "600", color: "#212121", paddingBottom: "8px" }}>Payment Details</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>UBA</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>00100010056</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>ESEMIE NIGERIA LIMITED</Column>
                    </Row>
                  </Column>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Column align="left" style={{ backgroundColor: "#F5F6F7", padding: "10px", borderRadius: "5px" }}>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "600", color: "#212121", paddingBottom: "8px" }}>Payment Details</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>UBA</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>00100010056</Column>
                    </Row>
                    <Row>
                      <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E", paddingBottom: "2px" }}>ESEMIE NIGERIA LIMITED</Column>
                    </Row>
                  </Column>
                </Row>
              </Column>

              <Column align="right" style={{ width: "65%", maxWidth: "400px" }}>
                <Row align="right" style={{ width: "80%" }}>
                  <Column align="left">
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>Sub-total</div>
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>
                      Discount <span style={{ marginLeft: "15px", padding: "5px", border: "1px solid #D0D5DD", borderRadius: "3px" }}>0.00 %</span>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>
                      VAT:<span style={{ marginLeft: "15px", padding: "5px", border: "1px solid #D0D5DD", borderRadius: "3px" }}>0.00 %</span>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#212121", backgroundColor: "#D0D5DD", padding: "8px 5px 8px 5px" }}>Total(NGN):</div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#212121",
                        marginTop: "10px",
                        padding: "8px 5px 8px 5px",
                        borderTop: "1px solid #0084EA",
                        borderBottom: "1px solid #0084EA",
                      }}
                    >
                      Balance Due:
                    </div>
                  </Column>
                  <Column align="right">
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>₦12,000.00</div>
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>₦00.00</div>
                    <div style={{ fontSize: "14px", fontWeight: "400", color: "#212121", padding: "5px 5px 15px 5px" }}>₦00.00</div>
                    <div style={{ fontSize: "14px", fontWeight: "600", color: "#212121", backgroundColor: "#D0D5DD", padding: "8px 5px 8px 5px" }}>₦00.00</div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#212121",
                        marginTop: "10px",
                        padding: "8px 5px 8px 5px",
                        borderTop: "1px solid #0084EA",
                        borderBottom: "1px solid #0084EA",
                      }}
                    >
                      Sub-total
                    </div>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section style={{ paddingTop: "5%" }}>
            <Row style={{ padding: "7px 0", borderBottom: "1px solid #D0D5DD" }}>
              <Column style={{ fontSize: "12px", fontWeight: "600", color: "#212121" }}>Thank you for choosing Esemie.</Column>
            </Row>
            <Row style={{ paddingTop: "10px" }}>
              <Column style={{ fontSize: "12px", fontWeight: "400", color: "#4E4E4E" }}>
                By signing this document, the customer agrees to the services and condition described in this document.
              </Column>
            </Row>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Welcome;
