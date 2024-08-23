"use client";

import Image from "next/image";
import "./style.css";

export default function CardsComponent() {
  return (
    <>
      <div className="CardContainerMain">
        <h1 className="CardMainTitle">
          <b>Kamu mau buat</b>
        </h1>
        <h1 className="CardMainTitle">
          <b className="colorGradient">Website</b>
          <b> apaah?</b>
        </h1>
        <div className="CardsContainerBody">
          <div className="CardData pinkColorCard">
            <h2>Toko Online</h2>
            <p>
              Punya website toko sendiri tanpa potongan marketplace dan tokomu
              lebih mudah ditemukan di Google. Punya website toko sendiri tanpa
              potongan marketplace dan tokomu lebih mudah ditemukan di Google.
            </p>
            <Image
              src={"/images/cards/Card1.svg"}
              width={484}
              height={263}
              className="CardImage"
              alt="Card1.svg"
            />
          </div>
          <div className="CardData greenColorCard">
            <h2>Company Profile</h2>
            <p>
              Perusahaan makin kredibel dengan desain web yang profesional.
              Ngedit ga ribet, tanpa admin!
            </p>
            <Image
              src={"/images/cards/Card2.svg"}
              width={416}
              height={308}
              className="CardImage"
              alt="Card2.svg"
            />
          </div>
          <div className="CardData blueColorCard">
            <h2>Personal Website</h2>
            <p>
              Buat website biar profilmu makin keren dan makin profesional.
              Side-hustle atau nyari kerja, libas!
            </p>
            <Image
              src={"/images/cards/Card3.svg"}
              width={247}
              height={276}
              className="CardImage"
              alt="Card3.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
