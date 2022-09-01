import styleHome from "../../styles/Home.module.css";
import styleSlick from "../../styles/Slick.module.css";
import { FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Slick() {
  const [topDestination, setTopDestination] = useState([]);
  const [loadDestination, setLoadDestination] = useState(true);
  const [trending, setTrending] = useState([])

  useEffect(() => {
    getTopDestination();
  }, []);

  const getTopDestination = () => {
    axios
      .get("/api/trendingDestination")
      .then((res) => {
        setTrending(res?.data?.trendingDestination)
        setTopDestination(res?.data?.topTenTrending);
        setLoadDestination(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const settings = {
    infinity: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
  };
  return (
    <>
      <div className="row px-1 mt-3">
        <div className="col-8 text-start">
          <h5 className={styleHome.exp}>Trending destinations</h5>
        </div>
        <div className="col-4 text-end">
          <Link href="/result" passHref>
            <a className={`${styleHome.vall} rm-decoration`}>View all</a>
          </Link>
        </div>
      </div>

      {loadDestination ? (
        <>
          <Skeleton height={180} />
        </>
      ) : (
        <>
          <Slider {...settings}>
            {trending?.map((item, key) => (
              <div key={key}>
                <div className={`${styleSlick.cardNew} card`}>
                  <Image
                    className={styleSlick.imgNew}
                    src={item?.country_img_url? item.country_img_url :"/assets/img/3.webp" }
                    alt="image"
                    width="130"
                    height="300"
                    loading="lazy"
                  />
                  <div className="row card-img-overlay align-items-end">
                    <div className={styleSlick.overlay}>
                      <div className="col-8">
                        <div className={`${styleSlick.airlines} `}>
                          <p>{trending.length} airlines</p>
                        </div>
                      </div>
                      <div className={`${styleSlick.textBottom} row`}>
                        <div className="col-8">
                          <div className={`${styleSlick.cardTitle} px-2`}>
                            <h4>{item.city},</h4>
                            <h2>{item.country}</h2>
                          </div>
                        </div>
                        <div className="col-4 text-center">
                          <Link href="/searchflight" passHref className="cursor">
                              <FiChevronRight className={styleSlick.icon} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
}

export default Slick;
