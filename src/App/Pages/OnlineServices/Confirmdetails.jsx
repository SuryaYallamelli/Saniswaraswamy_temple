import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import edit from "../../Assets/Images/edit.png";
import { useNavigate, useLocation } from "react-router-dom";

const Confirmdetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [poojaDetails, setPoojaDetails] = useState({});
  useEffect(() => {
    setPoojaDetails(location.state.values);
  }, [location.state.values]);
  // console.log(poojaDetails);
  return (
    <div className="Confirmdetails">
      <div className="ConfirmDetails_title">Confirm Details</div>
      <div className="ConfirmDetails_Card">
        <div className="ConfirmDetials_left">
          <div>{poojaDetails.name}</div>
          <div>{poojaDetails.gothram}</div>
          <div>{poojaDetails.nakshtram}</div>
          <div>{poojaDetails.dob}</div>
          <div>{poojaDetails.gender}</div>
          <div>{poojaDetails.address}</div>
          <div>{poojaDetails.city}</div>
          <div>{poojaDetails.state}</div>
          <div>{poojaDetails.pincode}</div>
          <div>{poojaDetails.mobile}</div>
        </div>
        <div className="ConfirmDetails_right">
          {!!poojaDetails.poojaName && <div>{poojaDetails.poojaName}</div>}
          {!!poojaDetails.poojaDate && <div>{poojaDetails.poojaDate}</div>}
          {!!poojaDetails.pooja && <div>{poojaDetails.pooja}</div>}
          {!!poojaDetails.occation && <div>{poojaDetails.occation}</div>}
          <div>₹ {poojaDetails.amount}</div>
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="edit_icon"
            src={edit}
            alt=""
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/Payment", {
              state: {
                values: { ...poojaDetails },
                type: "pooja",
              },
            });
          }}
          className="btn btn-primary"
        >
          Make payment
        </button>
      </div>
    </div>
  );
};

export default Confirmdetails;
