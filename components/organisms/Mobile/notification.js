import styleNotif from "../../../styles/Notification.module.css";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

function Notification() {
  return (
    <>
      <div className="row px-1 mt-3">
        <Link href="/">
          <div className="col-8 text-start">
            <FiChevronLeft className={styleNotif.left} />
          </div>
        </Link>
        <div className="col-4 px-4 text-end">
          <h4 className={styleNotif.clear}>Clear</h4>
        </div>
      </div>
      <div className="px-3 mt-2 pb-4">
        <h1 className={styleNotif.title}>Notifications</h1>
      </div>

      <div className="px-3 py-3">
        <div className={`${styleNotif.card} ${styleNotif.active} card px-4`}>
          <div className="card-body">
            <h5 className="card-title">Congratulations</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
          </div>
          <small className="px-3 py-2 pb-3">5h ago</small>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className={`${styleNotif.card} ${styleNotif.active} card px-4`}>
          <div className="card-body">
            <h5 className="card-title">Ticket Booked</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
          </div>
          <small className="px-3 py-2 pb-3">1 June 2020, 12:33 AM</small>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className={`${styleNotif.card} card px-4`}>
          <div className="card-body">
            <h5 className="card-title">Continue Payment</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
          </div>
          <small className="px-3 py-2 pb-3">4 May 2020, 10:43 AM</small>
        </div>
      </div>

      <div className="px-3 py-3">
        <div className={`${styleNotif.card} card px-4`}>
          <div className="card-body">
            <h5 className="card-title">Maintenance</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore....
            </p>
          </div>
          <small className="px-3 py-2 pb-3">4 May 2020, 10:43 AM</small>
        </div>
      </div>
    </>
  );
}

export default Notification;
