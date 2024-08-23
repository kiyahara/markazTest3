"use client";

import Image from "next/image";
import "./style.css";

export default function FooterComponent() {
  return (
    <>
      <div className="FooterContainerMain">
        <div className="FooterContainerBody">
          <div className="FooterRow">
            <Image
              src={"/images/navbar/logo.svg"}
              width={120}
              height={24}
              alt="logo.png"
            />
            <p>Sudah saatnya #BeraniDigital dari sekarang.</p>
            <p className="SubTitleFooter">Powered by Koneksi Group.</p>
            <Image
              src={"/images/SocialMedia.svg"}
              width={120}
              height={24}
              alt="logo.png"
            />
          </div>
          <div className="FooterRow">
            <p className="TitleFooter">Kategori</p>
            <p>UMKM</p>
            <p>Company Profile</p>
            <p>Personal</p>
          </div>
          <div className="FooterRow">
            <p className="TitleFooter">Panduan</p>
            <p>Pusat Bantuan</p>
            <p>Syarat dan Ketentuan</p>
            <p>Kebijakan Privasi</p>
          </div>
          <div className="FooterRow">
            <p className="TitleFooter">Layanan</p>
            <p>Fitur</p>
            <p>Konekios Pro</p>
            <p>Promo</p>
            <p>Desain Website</p>
            <p>Konekios x Legalisasi</p>
          </div>
          <div className="FooterRow">
            <p className="TitleFooter">Perusahaan</p>
            <p>Tentang</p>
            <p>Karir</p>
            <p>Kontak Kami</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </>
  );
}
