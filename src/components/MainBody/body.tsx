"use client";

import Image from "next/image";
import "./style.css";

export default function MainBodyComponent() {
  return (
    <>
      <div className="containerMain">
        <h1 className="mainTitle">
          <b>Tempatmu buat toko online,</b>
        </h1>
        <h1 className="mainTitle">
          <b>link in bio, portfolio,</b>
        </h1>
        <h1 className="mainTitle">
          <b>company profile, dan blog</b>
        </h1>
        <h2 className="hashTagTitle">
          Sudah saatnya #BerubahDigital dari sekarang.
        </h2>
        <div className="mainButton">
          <button className="buttonPrimary">Coba Gratis!</button>
          <button className="buttonSecondary">Desain Ciamique ✨</button>
        </div>
        <Image
          src={"/images/Main.svg"}
          width={100}
          height={100}
          className="MainImage"
          alt="Main.png"
        />
      </div>
    </>
  );
}
