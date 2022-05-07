import React from "react";
import Anchor from "../Anchor/Anchor";
import { FaWhatsapp } from "react-icons/fa";

function Index() {
  return (
    <>
      <Anchor
        href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`}
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </Anchor>
    </>
  );
}

export default Index;
