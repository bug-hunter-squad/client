import { BsEnvelope, BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import styleHome from "../../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/search/type";
import { useRouter } from "next/router";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Nav() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [keywords, setKeyword] = React.useState("");
  const handleSearch = () => {
    dispatch({
      type: Type.SET_SEARCH,
      payload: {
        keyword: keywords,
      },
    });
    router.push("/searchflight");
  };

  return (
    <>
      <div className="row px-1">
        <div className="col text-start">
          <h2 className={styleHome.exp}>{"Explore" || <Skeleton />}</h2>
        </div>
        <div className="col text-end">
          <BsEnvelope className={`${styleHome.icon} px-2`} />
          <Link href="/notification">
            <BsBell className={`${styleHome.icon} px-2`} />
          </Link>
        </div>
      </div>

      <div className="row justify-content-lg-center px-1">
        <div className="col">
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
              <FiSearch className={styleHome.icon} />{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
