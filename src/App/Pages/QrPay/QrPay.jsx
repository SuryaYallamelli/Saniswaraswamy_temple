// @ts-ignore: side-effect CSS import without type declarations
import "./QrPayStyles.css";
import paymentQr from "../../Assets/Images/payment-qr.jpg";
const QrPay = () => {
  return (
    <div class="qr-container">
      <section class="qr-section">
        <h3 class="qr-header-title">పరోక్ష సేవలు</h3>
        <p class="qr-header-sub">
          స్వయంగ రాలేని భక్తులు నిర్వహించు కొను పరోక్ష పూజలు
        </p>
      </section>

      <section class="qr-card">
        <h3 class="qr-category qr-red">ఏకాదశ రుద్రతైలాభిషేకం</h3>

        <table class="qr-table">
          <tr class="qr-row">
            <th class="qr-cell qr-head">వివరం</th>
            <th class="qr-cell qr-head">రుసుము</th>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">ఒకసారి తైలాభిషేకం</td>
            <td class="qr-cell">₹600</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">
              శాశ్వత తైలాభిషేకం (సం||లో ఒకరోజు 10 సం||లకు)
            </td>
            <td class="qr-cell">₹6,000</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">ఒక సం||లో 52 శనివారములకు</td>
            <td class="qr-cell">₹31,200</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">శాశ్వత శని త్రయోదశులు (10 సం||లకు మాత్రమే)</td>
            <td class="qr-cell">₹36,000</td>
          </tr>
        </table>
      </section>

      <section class="qr-card">
        <h3 class="qr-category qr-red">మహాన్యాస పూర్వక తైలాభిషేకం</h3>

        <table class="qr-table">
          <tr class="qr-row">
            <th class="qr-cell qr-head">వివరం</th>
            <th class="qr-cell qr-head">రుసుము</th>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">ఒకసారి తైలాభిషేకం</td>
            <td class="qr-cell">₹400</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">
              శాశ్వత తైలాభిషేకం (సం||లో ఒకరోజు 10 సం||లకు)
            </td>
            <td class="qr-cell">₹5,000</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">ఒక సం||లో 52 శనివారములకు</td>
            <td class="qr-cell">₹20,800</td>
          </tr>
          <tr class="qr-row">
            <td class="qr-cell">శాశ్వత శని త్రయోదశులు (10 సం||లకు మాత్రమే)</td>
            <td class="qr-cell">₹30,000</td>
          </tr>
        </table>
      </section>

      <section class="qr-card">
        <h3 class="qr-category qr-red">శని జపములు</h3>

        <table class="qr-table">
          <tr class="qr-row">
            <td class="qr-cell shani-cell">
              స్వయంగ రాలేని భక్తులు శని జపములు 19000, తర్పణములు 4000, తైలాభిషేకం
              మరియు హోమసామగ్రంతో కలిపి శనివారం మొదలు పెట్టి మరల శనివారం వరకు
              జరిపించుకోనుటకు
            </td>
            <td class="qr-cell">₹8,000</td>
          </tr>
        </table>
      </section>

      <section class="qr-card">
        <h3 class="qr-category qr-red">శాంతి హోమం</h3>

        <table class="qr-table">
          <tr class="qr-row">
            <td class="qr-cell">శని శాంతి హోమం (సామగ్రి, దక్షిణథో కలిపి)</td>
            <td class="qr-cell">₹1,500</td>
          </tr>
        </table>
      </section>

      <section class="qr-payment-card">
        <h3 class="qr-payment-title">QR ద్వారా చెల్లింపు</h3>

        <div className="qr-payment-section">
          <img src={paymentQr} alt="QR Code" class="qr-payment-img" />
          <p>
            UPI ID: <strong>11340208386@SBI</strong> <br />
            A/C No: <strong>11340208386</strong> <br />
            A/C Name: <strong>
              Sri Mandeswara swamy Temple.Mandapalli.
            </strong>{" "}
            <br />
            IFSC: <strong>SBIN0000982</strong> <br />
            Branch: <strong>SBI Kothapeta</strong>
          </p>
          <p className="qr-step">
            స్వయంగ రలేని భక్తులు QR Code ద్వార పూజా రుసుము చెల్లించి Transaction
            Receipt, గోత్ర నామాలు, చిరునామా మరియూ పూజ జరిపించవలసిన తేదీ వివరాలతో
            <strong> 9491006567</strong> కి Whatsapp పంపగలారు. పూజానంతరం ప్రసాదం
            పోస్ట్ ద్వార పంపగలవారము. సదరు పరోక్ష సేవాలను భక్తులు దేవస్థానం
            Youtube channel - sri mandapalli saneswara ద్వార లైవ్ లో చూడవచ్చూ
            ను.
          </p>
        </div>
      </section>
    </div>
  );
};

export default QrPay;
