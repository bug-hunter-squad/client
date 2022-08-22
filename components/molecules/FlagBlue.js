import style from "../../styles/SearchResultmobile.module.css";

function FlagBlue() {
  return (
    <>
      <div className={style.container}>
        <div className="container py-5">
          <div className="row text-white">
            <div className="col-8">
              <h4>Contact Person Details</h4>
            </div>
            <div className="col-4">
              <div className="d-flex justify-content-between">
              <h4>Flight Details</h4>
              <h6 className="pt-2">View Details</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlagBlue;
