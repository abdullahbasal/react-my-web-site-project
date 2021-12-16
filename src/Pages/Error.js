import React from "react";
import Navbar from "../Components/Navbar";
import ErrorComp from "../Components/ErrorComp";
import Footer from "../Components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Navbar></Navbar>
      <ErrorComp></ErrorComp>
      <Footer></Footer>
    </>
  );
}
