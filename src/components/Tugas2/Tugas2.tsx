"use client";

// import Image from "next/image";
// import "./style.css";
import React, { FormEvent, useEffect, useState } from "react";

export default function Tugas2Component() {
  const [formData, setFormData] = useState({
    size: 0,
  });

  const [formTriangle, setFormTriangle] = useState<string[]>([]);

  function GenerateTriangle(sizeTriangle: number) {
    const size = sizeTriangle;
    var hashTag: string = "#";
    var whitespace: string = " ";
    const tempFormTriangle = [];
    for (let i = size - 1; i >= 0; i--) {
      tempFormTriangle.push(whitespace.repeat(i) + hashTag.repeat(size - i));
      console.log(whitespace.repeat(i) + hashTag.repeat(size - i));
    }
    console.log(tempFormTriangle);
    setFormTriangle(tempFormTriangle);
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    GenerateTriangle(formData.size);
  }

  return (
    <>
      <div className="containerMain">
        <form onSubmit={onSubmit}>
          <a href="/">Back</a>
          <p>Tugas 2</p>
          <p>Logic Menghitung Data</p>
          <div className="InputData">
            <span>Masukkan Ukuran Segitiga</span>
            <input
              type="number"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {formTriangle.length > 0 ? (
          <>
            {formTriangle?.map((DataTriangle: string, i: number) => (
              <React.Fragment key={i}>
                <pre>{DataTriangle}</pre>
              </React.Fragment>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
