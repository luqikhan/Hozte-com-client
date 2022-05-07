import React from "react";

function Anchor(props) {
  const { children } = props;
  return <a {...props}>{children}</a>;
}

export default Anchor;
