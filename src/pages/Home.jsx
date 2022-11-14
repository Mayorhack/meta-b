import React from "react";
import Button from "../components/Button";
import headerImage1 from "../assets/image1.png";
import headerImage2 from "../assets/image2.png";
import headerImage3 from "../assets/image3.png";
import headerImage4 from "../assets/image4.png";
import mbToken from "../assets/mbToken.svg";
import metaTask from "../assets/metaTask.svg";
import openSea from "../assets/openSea.svg";
import { homeData } from "../data/data";
import Collections from "../components/Collections";
import metabnb from "../assets/metabnb.png";

const Home = () => {
  console.log(homeData);
  return (
    <div className="home">
      <header className="header container">
        <div className="header_text">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="searchbar">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for location"
            />
            <Button text={"Search"} />
          </div>
        </div>
        <div className="grid_pictures">
          <div className="first_grid">
            <div className="header_image">
              <img src={headerImage1} alt="" />
            </div>
            <div className="header_image">
              <img src={headerImage3} alt="" />
            </div>
          </div>
          <div className="last_grid">
            <div className="header_image">
              <img src={headerImage2} alt="" />
            </div>
            <div className="header_image">
              <img src={headerImage4} alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className="highlighted">
        <img src={mbToken} alt="" />
        <img src={metaTask} alt="" />
        <img src={openSea} alt="" />
      </section>
      <section className="inspiration container">
        <h1>Inspiration for your next adventure</h1>
        <Collections data={homeData} />
      </section>
      <section className="metaBnB">
        <div className="container">
          <div className="meta_text">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <Button text={"Learn more"} />
          </div>
          <div className="metabnb_image">
            <img src={metabnb} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
