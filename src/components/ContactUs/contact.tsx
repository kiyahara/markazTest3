"use client";

import Image from "next/image";
import "./style.css";

export default function ContactUsComponent() {
  return (
    <>
      <div className="ContactContainerMain">
        <div className="ContactContainerBody">
          <h1 className="TitleContact">Dapatkan Penawaran Menarik! 💎💎💎</h1>
          <div className="SearchInputBody">
            <input type="text" name="search" placeholder="Masukkan Email.." />
          </div>
          <div className="ButtonSendBody">
            <button className="ButtonSend">
              Kirim
              <Image
                src={"/images/SendIcon.svg"}
                width={20}
                height={20}
                alt="SendIcon.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
