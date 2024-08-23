"use client";

import "./style.css";
import NavbarComponent from "../Navbar/navbar";
import MainBodyComponent from "../MainBody/body";
import CardsComponent from "../Cards/cards";
import ContactUsComponent from "../ContactUs/contact";
import FooterComponent from "../Footer/footer";

export default function HomeComponent() {
  return (
    <>
      {/* <div className="ContainerHome"> */}
      <NavbarComponent />
      <MainBodyComponent />
      <CardsComponent />
      <ContactUsComponent />
      <FooterComponent />
      {/* </div> */}
    </>
  );
}
