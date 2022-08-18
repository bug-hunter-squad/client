import FixedMenu from "../components/molecules/fixedmenu";
import { BsEnvelope, BsBell } from "react-icons/bs";
import Link from "next/link";
function MyBooking() {
  return (
    <>
      <div className="container">
        <div className="">
          <div className="row px-1">
            <div className="col text-start">
              <h1 className="">My Booking</h1>
            </div>
            <div className="col text-end">
              <BsEnvelope className="mx-2" />
              <Link href="/notification">
                <BsBell className="" />
              </Link>
            </div>
          </div>
        </div>
        <FixedMenu />
      </div>
    </>
  );
}

export default MyBooking;
