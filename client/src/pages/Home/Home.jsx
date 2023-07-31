import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

import '../../App.css';

const Home = () => {
  return (
   
    <div className="home-container-1">
       <script
src='//fw-cdn.com/2509231/3060946.js'
chat='true'>
</script>
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
