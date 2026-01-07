import React from "react";
import "./Annadanam.css";
import Annadanampic from "../../Assets/Images/annadanamImage.jpg";
import AnnadanamQR from "../../Assets/Images/annadanamQR.PNG";

const Annadanam = () => {
  return (
    <div className="Annadanam">
      <div className="Annadanam-img">
        <img
          style={{ height: "340px", width: "508px" }}
          src={Annadanampic}
          alt=""
        />
      </div>
      <div className="Annadanam-text">
        అన్నదానం అత్యున్నతమైన దానంగా శాస్త్రాలు పేర్కొంటాయి. అన్నం పరబ్రహ్మ
        స్వరూపమని భావించి, ఆకలితో ఉన్నవారికి భోజనం సమర్పించడం భగవంతునికి చేసిన
        సేవగా భావించబడుతుంది. అన్నదానం ద్వారా దాతకు పుణ్యఫలం లభించి, లోకక్షేమం,
        సుఖశాంతులు కలుగుతాయని విశ్వాసం. అందుకే దేవాలయాలలో అన్నదానం ఒక పవిత్రమైన
        సేవగా నిరంతరం నిర్వహించబడుతుంది.
        <div className="anndanam-QR-details">
          <img
            style={{ height: "200px", width: "180px" }}
            src={AnnadanamQR}
            alt=""
          />
          <div style={{ marginLeft: "20px" }}></div>
          A/C NAME: SRI MANDESWARA SWAMY TEMPLE
          <br />
          BANK NAME: UNION BANK OF INDIA, KOTHAPETA
          <br />
          A/C NO: 031610100152230
          <br />
          IFSC CODE: UBIN0803162
          <br />
        </div>
        {/* <div className="anndanam-button-container">
          <button className="annadanam-button">Donate</button>
        </div> */}
      </div>
    </div>
  );
};

export default Annadanam;
