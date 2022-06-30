import { useEffect, useState } from "react";

const Quote = require("inspirational-quotes");

export default function insirationalQuotes() {
  const [t, tSet] = useState("");
  useEffect(() => {
    let tmp = Quote.getQuote();
    tSet(tmp);
  }, []);
  return (
    <>
      <div>
        <span style={{ color: "black" }}>{t.text}</span>
      </div>
      <div>
        <em>{t.author}</em>
      </div>
    </>
  );
}
