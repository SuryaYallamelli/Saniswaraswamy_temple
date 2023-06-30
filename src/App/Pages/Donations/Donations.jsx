import React, { useState } from "react";
import "./Donations.css";
import { useNavigate } from "react-router-dom";

const Donations = () => {
  const navigate = useNavigate();
  const initiatePayment = () => {
    if (Object.values(donation_values).every((value) => !!value)) {
      navigate("/Confirmdetails", {
        state: { values: { ...donation_values, paymentType: "donation" } },
      });
    }
  };
  const initial_donation_values = {
    name: "",
    gothram: "",
    nakshtram: "",
    amount: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    mobile: "",
    occation: "",
  };
  const [donation_values, setdonation_values] = useState(
    initial_donation_values
  );
 // console.log(donation_values);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setdonation_values({ ...donation_values, [name]: value });
  };

  return (
    <div className="Yekadasa_rudratailabishekam">
      <div className="Yekadasa_rudratailabishekam_title">Donations</div>
      <form className="donations_form" action="">
        <div>
          <label htmlFor="">Donor / Nominee Name</label>
          <br />
          <input
            className="input_box"
            name="name"
            value={donation_values.name}
            onChange={changeHandler}
            type="text"
            placeholder="please enter donor/nominee name"
          />
        </div>

        <div>
          <label htmlFor="">Gothram</label>
          <br />
          <input
            className="input_box"
            name="gothram"
            value={donation_values.gothram}
            onChange={changeHandler}
            type="text"
            placeholder="please enter your gothram"
          />
        </div>

        <div>
          <label htmlFor="">Nakshtram</label>
          <br />
          <input
            className="input_box"
            name="nakshtram"
            value={donation_values.nakshtram}
            onChange={changeHandler}
            type="text"
            placeholder="Please enter your nakshtram"
          />
        </div>

        <div>
          <label htmlFor="">Date of Birth</label> <br />
          <input
            className="input_box"
            name="dob"
            value={donation_values.dob}
            onChange={changeHandler}
            type="date"
            id=""
          />
        </div>

        <div>
          <label htmlFor="">Amount</label>
          <br />
          <input
            className="input_box"
            name="amount"
            value={donation_values.amount}
            type="text"
            onChange={changeHandler}
            placeholder="Please enter the donation amount"
          />
        </div>
        <div>
          <label htmlFor="">Occation</label>
          <br />
          <input
            className="input_box"
            name="occation"
            value={donation_values.occation}
            type="text"
            onChange={changeHandler}
            placeholder="Please enter the occation Ex: Birthday"
          />
        </div>

        <div>
          <label htmlFor="">Gender</label>
          <br />
          <select
            name="gender"
            value={donation_values.gender}
            onChange={changeHandler}
            id=""
          >
            <option value="" hidden>
              Select a gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            className="input_box"
            name="address"
            value={donation_values.address}
            onChange={changeHandler}
            placeholder="House/building number, street name"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">City</label>
          <br />
          <input
            className="input_box"
            placeholder="Please enter your city"
            name="city"
            value={donation_values.city}
            onChange={changeHandler}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">Pincode</label>
          <br />
          <input
            className="input_box"
            placeholder="Enter your pincode"
            name="pincode"
            value={donation_values.pincode}
            onChange={changeHandler}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="">State</label>
          <br />
          <select
            name="state"
            value={donation_values.state}
            onChange={changeHandler}
          >
            <option value="" hidden>
              Select state
            </option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Mobile Number</label>
          <br />
          <input
            placeholder="Enter your mobile number"
            className="input_box"
            name="mobile"
            value={donation_values.mobile}
            onChange={changeHandler}
            type="text"
          />
        </div>
      </form>
      <div>
        <button
          className="btn btn-primary"
          onClick={initiatePayment}
          disabled={!Object.values(donation_values).every((value) => !!value)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Donations;
