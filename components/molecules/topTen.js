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

function TopTen() {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinity: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div className="row px-1 mt-4">
        <div className="col">
          <h4 className={styleHome.exp}>Top 10 destinations</h4>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((img, key) => (
        <>
          <div className="px-2" key={key}>
            <div className={styleSlick.outlineBlue}>
              <div className={`${styleSlick.cardTopTen} card`}>
                <Image
                  className={styleSlick.imgTopTen}
                  src={img}
                  alt={img}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  layout="responsive"
                />
              
              </div>
            </div>
          </div>  
          <h5>Jakarta</h5>
        </>
         
         
        ))}
      </Slider>
    </>
  );
}

export default TopTen;
