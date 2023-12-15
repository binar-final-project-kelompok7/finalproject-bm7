import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Popular from "../components/Popular";
import BottomNav from "../components/BottomNav";

const Home = () => {
  return (
    <div className="container-fluid p-0 home mb-md-0 mb-5 pb-5">
      <Header />
      <Hero />
      <Category />
      <Popular />
      <BottomNav />
    </div>
  );
};

export default Home;
