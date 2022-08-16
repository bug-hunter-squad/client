import styleHome from "../../styles/Home.module.css";
import styleSlick from "../../styles/Slick.module.css";
import { FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import Image from "next/image";
import dummy1 from "../../public/assets/img/1.webp";
import dummy2 from "../../public/assets/img/2.webp";
import dummy3 from "../../public/assets/img/3.webp";
import dummy4 from "../../public/assets/img/4.webp";
import dummy5 from "../../public/assets/img/5.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const images = [dummy1, dummy2, dummy3, dummy4, dummy5];

function Slick() {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinity: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="row px-1 mt-3">
        <div className="col-8 text-start">
          <h4 className={styleHome.exp}>Trending destinations</h4>
        </div>
        <div className="col-4 text-end">
          <h5 className={styleHome.vall}>View all</h5>
        </div>
      </div>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div>
            <div className={`${styleSlick.cardNew} card`}>
              <Image
                className={styleSlick.imgNew}
                src={img}
                alt={img}
                width="130"
                height="300"
                loading="lazy"
              />
              <div className="row card-img-overlay align-items-end">
                <div className={styleSlick.overlay}>
                  <div className="col-8">
                    <div className={`${styleSlick.airlines} `}>
                      <p>15 airlines</p>
                    </div>
                  </div>
                  <div className={`${styleSlick.textBottom} row`}>
                    <div className="col-8">
                      <div className={`${styleSlick.cardTitle} px-2`}>
                        <h4>Tokyo,</h4>
                        <h2>Japan</h2>
                      </div>
                    </div>
                    <div className="col-4 text-center">
                      <FiChevronRight className={styleSlick.icon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Slick;
