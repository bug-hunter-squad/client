import styleHome from "../../styles/Home.module.css";
import styleSlick from "../../styles/Slick.module.css";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TopTen() {
  const [topDestination, setTopDestination] = useState([]);
  const [loadDestination, setLoadDestination] = useState(true);

  useEffect(() => {
    getTopDestination();
  }, []);

  const getTopDestination = () => {
    axios
      .get("/api/trendingDestination")
      .then((res) => {
        setTopDestination(res?.data?.topTenTrending);
        setLoadDestination(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row px-1 mt-4">
        <div className="col">
          <h5 className={styleHome.exp}>Top 10 destinations</h5>
        </div>
      </div>
      {loadDestination ? (
        <>
          <Skeleton height={90} />
        </>
      ) : (
        <>
          <div className="d-flex flex-row flex-nowrap d-block overflow-auto recipe-scroll mt-2 p-2border">
            {topDestination.map((item, key) => (
              <>
                <Link href="/searchflight" className="cursor">
                  <div className="px-2 mb-5" key={key}>
                    <div className={styleSlick.outlineBlue}>
                      <div className={`${styleSlick.cardTopTen} card`}>
                        <Image
                          className={styleSlick.imgTopTen}
                          src={item?.country_img_url? item?.country_img_url : "/assets/img/3.webp"}
                          alt="image"
                          width="100%"
                          height="100%"
                          loading="lazy"
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <h6 className="text-center">{item?.city}</h6>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default TopTen;
