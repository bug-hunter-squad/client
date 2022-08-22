import Nav from "../../molecules/Nav";
import Slick from "../../molecules/Slick";
import StoryDestination from "../../molecules/topTen";
import FixedMenu from "../../molecules/fixedmenu";
import styleSlick from "../../../styles/Slick.module.css";

function Home() {
  return (
    <>
      <div className="container mobile mt-5 mb-5">
        
          <Nav />
          <Slick />
          <StoryDestination />
        
          <FixedMenu />
      </div>
    </>
  );
}

export default Home;
