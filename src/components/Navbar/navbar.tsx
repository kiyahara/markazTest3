"use client";

import Image from "next/image";
import "./style.css";

export default function NavbarComponent() {
  return (
    <div className="navBarContainer">
      <div className="logo">
        <Image
          src={"/images/navbar/logo.svg"}
          width={120}
          height={24}
          alt="logo.png"
        />
      </div>
      <div className="category">
        <a className="linkTugas" href="/Tugas1">
          Tugas 1
        </a>
        <a className="linkTugas" href="/Tugas2">
          Tugas 2
        </a>
        <p>Kategori</p>
        <p>Template</p>
        <p>Harga</p>
      </div>
      <div className="authentication">
        <button className="buttonLogin">Login</button>
        <button className="buttonSignUp">Sign Up</button>
      </div>
    </div>
  );
}
