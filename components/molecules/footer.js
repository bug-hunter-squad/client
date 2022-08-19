import style from "../../styles/SearchResult.module.css"
import Image from "next/image";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-white py-3 mt-5">
        <div className="container px-5">
          <div className="row">
            <div className="col-4 px-2">
              <div className="d-flex">
                <Image
                  src="/assets/img/logoblue.svg"
                  alt="Logo"
                  height={28}
                  width={28}
                />
                <h3 className="px-3 py-4">Ankasa</h3>
              </div>
              <p>
                Find your Flight and explore the world with us. We will take
                care of the rest
              </p>
            </div>
            <div className="col-3 px-2">
              <h6 className="py-4">Features</h6>
              <p>Find Ticket</p>
              <p>My Booking</p>
              <p>Chat</p>
              <p>Notification</p>
            </div>
            <div className="col-3">
              <h6 className="py-4">Download Angkasa app</h6>
              <Image
                src="/assets/img/appstore.png"
                alt="Logo"
                height="55"
                width="195"
              />
              <Image
                src="/assets/img/gplay.png"
                alt="Logo"
                height="55"
                width="195"
              />
            </div>
            <div className="col-2 px-0">
              <h6 className="py-4">Follow Us</h6>
                <FiFacebook className={style.iconSocmed} />
                <FiTwitter className={style.iconSocmed} />
                <FiInstagram className={style.iconSocmed} />
                <FiYoutube className={style.iconSocmed} />
            </div>
          </div>

          <div className="d-flex justify-content-between py-3">
            <p>© Ankasa.  All Rights Reserved.</p>
            <p className="px-3"><FiMapPin /> Jakarta Indonesia</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
