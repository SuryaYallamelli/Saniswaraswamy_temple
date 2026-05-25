import React from "react";
// import QR from "../../Assets/Images/Scanner_img.jpg";
// import QR3 from "../../Assets/Images/qr3.jpeg";
import "./Poster.css";

const Poster = () => {
  return (
    <div id="poster-container">
      <div className="poster-section">
        <div className="poster-left">
          <div className="poster-section-title">భక్తులకు విజ్ఞప్తి</div>
          స్వయంగ రాలేని భక్తులు QR CODE ద్వారా ఆన్‌లైన్‌లో పూజలను బుక్
          చేసుకోనవచును.
          <br />
          {/* <img className="QR-img" src={QR} alt="QR_Code.." />
          <br />
          చెల్లించిన రసీదు పేరు, గోత్రనామములు, చిరునామ మరియు
          జరిపించవలసిన తేది వివరాలతో +91 9491006567 నకు WhatsApp మెస్సేజ్
          పంపించగలరు. పూజానంతరం ప్రసాదం POST ద్వార పంపగలవారము. */}
        </div>
        <div className="poster-right">
          <table>
            <thead>
              <tr>
                <th>పూజ వివరము</th>
                <th>1 సారి పూజకు</th>
                <th>
                  శాశ్వత అభిషేకము <br /> 10 సం||లు మాత్రమే
                </th>
                <th>
                  1సం.లో వచ్చే <br /> 52 శనివారములకు
                </th>
                <th>
                  శాశ్వత శనిత్రయోదశులు <br /> (సం.లో వచ్చే ప్రతి శనిత్రయోదశులు){" "}
                  <br /> 10 సం||లు మాత్రమే.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="poster-td">ఏకాదశ రుద్రతైలాభిషేకం</td>
                <td className="poster-td">రూ||600/-</td>
                <td className="poster-td">
                  రూ||6,000/- <br />
                  (ఈ సం||తో కలిపి)
                </td>
                <td className="poster-td">రూ||31,200/-</td>
                <td className="poster-td">
                  రూ||36,000/- <br />
                  (ఈ సం||తో కలిపి)
                </td>
              </tr>
              <tr>
                <td className="poster-td">
                  మహాన్యాసపూర్వక <br /> ఏకవార రుద్రతైలాభిషేకం
                </td>
                <td className="poster-td">రూ||400/-</td>
                <td className="poster-td">
                  రూ||5,000/- <br /> (ఈ సం||తో కలిపి)
                </td>
                <td className="poster-td">రూ||20,800/-</td>
                <td className="poster-td">
                  రూ||30,000/- <br /> (ఈ సం||తో కలిపి)
                </td>
              </tr>
              <tr>
                <td className="poster-td">శని జపం</td>
                <td className="poster-td">రూ||8,000/-</td>
                <td colSpan={3} className="poster-td">
                  {/* స్వయం గా రాలేని వారి శని జపం రూ||19,000/-, తర్పణములు
                  రూ||4000/- ; తైలాభిషేకం మరియు హోమసామగ్రి తో కలిపి శనివారం
                  మొదలు పెట్టి, మారలా శనివారం వరకు. */}
                 స్వయంగా రాలేని భక్తులు తరుపున  పురోహితులు చే ముందుగా తైలాభిషేకం అనంతరం 19000              
                 శనిజపములు 4000   తర్పణములు అనంతరం  హోమంచేయబడును.
                 అనగా శనివారం మొదలు పెట్టి శనివారం వరకు చేయబడును.(వారం రోజులు జరుపబడును )
                </td>
              </tr>
              <tr>
                <td className="poster-td">శని శాంతి హోమం</td>
                <td className="poster-td">రూ||1,500/-</td>
                <td colSpan={3} className="poster-td"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Poster;
