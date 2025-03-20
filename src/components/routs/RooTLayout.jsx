import React from "react";
import MainHeader from "../MainHeader";
import { Outlet } from "react-router-dom";

const RooTLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RooTLayout;
