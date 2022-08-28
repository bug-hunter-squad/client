import { BsEnvelope, BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import styleHome from "../../styles/Home.module.css";
import styleNav from "../../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";

function NavDesktop() {
  return (
    <>
      <div className={`${styleNav.shadow} row py-2 align-items-center bg-white`}>
        <div className="col-3 d-flex justify-content-center">
          <Image
            src="/assets/img/logoblue.svg"
            alt="Logo"
            height={28}
            width={28}
          />
          <h3 className="px-3 py-4">Angkasa</h3>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <div className={`${styleHome.search} mb-2 mt-3`}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where you want to go?"
                    required
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <FiSearch className={styleHome.icon} />
                </form>
              </div>
            </div>
            <div className="col-8">
              <nav className="navbar navbar-expand-lg py-4">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link href="/" passHref>
                          <a
                            className={`${styleNav.linkmenu} ${styleNav.activemenu} rm-decoration px-3`}
                          >
                            Find Ticket
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link href="/" passHref>
                          <a
                            className={`${styleNav.linkmenu} rm-decoration px-3`}
                          >
                            My Booking
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col">
                        <BsEnvelope className={`${styleNav.iconD} px-3`} />
                        <Link href="/notification">
                          <BsBell className={`${styleNav.iconD} px-3`} />
                        </Link>
                      </div>
                    </div>
                    <div className={styleNav.outlineBlue}>
                      <div className={`${styleNav.cardProfile} card`}>
                        <Image
                          className={styleNav.imgProfile}
                          src="/assets/img/profil.png"
                          alt="profile"
                          width="100%"
                          height="100%"
                          loading="lazy"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDesktop;
