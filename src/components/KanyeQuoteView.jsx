import React from "react";
import Quote from "./Quote";

export default function KanyeQuoteView() {

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      {/* <p>{selector.quote}</p> */}
      {/* <Quote/> */}

      <button >Get Quote</button>
      <button >Add Favorite</button>
    </section>
  );
}
