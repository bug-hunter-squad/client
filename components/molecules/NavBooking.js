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
 
  return (
    <>
      <div className="row px-1">
        <div className="col text-start">
          <h2 className={styleHome.exp}>{"MyBooking" || <Skeleton />}</h2>
        </div>
        <div className="col text-end">
          <Link href="/chat">
              <BsEnvelope className={`${styleHome.icon} px-2`} />
          </Link>
        
          <Link href="/notification">
            <BsBell className={`${styleHome.icon} px-2`} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
