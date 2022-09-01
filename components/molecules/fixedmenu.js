import Link from "next/link";
import navStyle from "../../styles/Nav.module.css";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdCompass } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux"

function Fixedmenu() {
  const router = useRouter();

  const { auth } = useSelector((state) => state);

  const handleProfile =(e) =>{
    e.preventDefault();
    if(auth?.token === undefined || auth.token === null){
      router.replace("/welcome")
    }else{
      router.push("/profile")
    }
  }


  return (
    <>
      <div className={`${navStyle.shadowFixed} container mobile px-1 text-center fixed-bottom bg-white`}>
        <div className="row justify-content-md-center justify-content-lg-center">
          <div className="col">
            <nav
              className="navbar navbar-expand navbar-light"
              style={{ height: "100px" }}
            >
              <ul className="navbar-nav nav-justified w-100">
              <Link href="/mybooking">
                  <li className={`${navStyle.navItem}`}>
                    <TbBrandBooking className={`${navStyle.icon}`} /> <br/>
                    <small>My Booking</small>
                  </li>
                </Link>
                <Link href="/searchflight">
                  <li className={`${navStyle.navItem} ${navStyle.shadowIcon}`}>
                    <IoMdCompass className={`${navStyle.icon} ${navStyle.active}`} />
                  </li>
                </Link>
              
                  <li className={`${navStyle.navItem}`} onClick={handleProfile}>
                    <CgProfile className={`${navStyle.icon}`} /> <br/>
                    <small>Profile</small>
                  </li>
              
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fixedmenu;
