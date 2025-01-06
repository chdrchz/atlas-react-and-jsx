import React, { useState } from "react";

import Copy from "../assets/copy.svg";

export default function CopyLink({ link }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <img
        className="copy"
        src={Copy}
        alt="Copy Link"
        onClick={copyToClipboard}
        style={{ cursor: "pointer" }}
      />
      {copied}
    </div>
  );
}
