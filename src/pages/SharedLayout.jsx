import React  from "react";
import { Footer, StyledNavbar } from "../components";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
