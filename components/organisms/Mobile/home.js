import Nav from "../../molecules/Nav";
import Slick from "../../molecules/Slick";
import StoryDestination from "../../molecules/topTen";

function Home() {
  return (
    <>
      <div className="container mobile mt-5">
        <Nav />
        <Slick />
        <StoryDestination />

      </div>
    </>
  );
}

export default Home;
