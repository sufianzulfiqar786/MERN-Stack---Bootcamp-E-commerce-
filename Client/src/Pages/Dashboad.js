import React from "react";
import "../CSS/Dashboad.css";
import LaptopPage from "./LaptopPage";
import PhonePage from "./PhonePage";
import { Link } from "react-router-dom";

const Dashboad = () => {
  const [DashboardState, setDashboardState] = React.useState(1);

  return (
    <>
      <div className="row ">
        <div className="col-1 dashboadBody border-right">
          <div className="row  ">
            <div className="col-12 dashboardIcons " onClick={() => {
                  setDashboardState(1);
                }}>phone
              <i
                class="fa fa-phone"
                aria-hidden="true"
                
              ></i>
            </div>

            <div className="col-12 dashboardIcons " onClick={() => {
                  setDashboardState(2);
                }}> laptop
              <i
                class="fa fa-laptop"
                aria-hidden="true"
                
              ></i>
            </div>
          </div>
        </div>

        <div className="col-11 ">
          {/* phone html  */}
          {DashboardState == 1 ? <PhonePage /> : ""}

          {/* laptop html  */}
          {DashboardState == 2 ? <LaptopPage /> : ""}
        </div>
      </div>
    </>
  );
};

export default Dashboad;
