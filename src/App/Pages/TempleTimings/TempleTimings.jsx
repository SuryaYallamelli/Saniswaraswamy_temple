import React from "react";
import "./TempleTimings.css";

const TempleTimings = () => {
  
  return (
    <div className="temple-timings-container">
      <h1 className="main-title">Temple Timings</h1>

      <div className="timings-wrapper">
        {/* Left Section */}
        <div className="timing-card">
          <h2>Temple Darshan Timings</h2>

          <h3>Normal Days Darshanam</h3>

          <table>
            <tbody>
              <tr>
                <td>Morning</td>
                <td>5:00 AM to 12:00 PM</td>
              </tr>
              <tr>
                <td>Afternoon</td>
                <td>4:00 PM to 7:00 PM</td>
              </tr>
            </tbody>
          </table>

          <h3>Saturdays Darshanam</h3>

          <table>
            <tbody>
              <tr>
                <td>Morning</td>
                <td>4:00 AM to 1:00 PM</td>
              </tr>
              <tr>
                <td>Afternoon</td>
                <td>4:00 PM to 7:00 PM</td>
              </tr>
            </tbody>
          </table>

          <h3>Abhishekam</h3>

          <table>
            <tbody>
              <tr>
                <td>Normal Days</td>
                <td>5:00 AM to 11:00 AM</td>
              </tr>
              <tr>
                <td>Saturdays</td>
                <td>4:00 AM to 12:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section */}
        <div className="timing-card">
          <h2>Online Paroksha Abhishekams</h2>

          <table>
            <tbody>
              <tr>
                <td>Every Day</td>
                <td>11:00 AM</td>
              </tr>
              <tr>
                <td>Saturdays</td>
                <td>12:00 PM</td>
              </tr>
            </tbody>
          </table>

          <div className="note-box">
            <h3>Important Information</h3>

            <p>
              Devotees are requested to book online paroksha abhishekam before
              11:00 AM. Bookings after 11:00 AM will be considered for the next
              day.
            </p>
             <p>
              భక్తులకు గమనిక. ఆన్లైన్లో పరోక్ష అభిషేకము బుక్ చేసుకునే
              భక్తులు ఉదయం 11:00 గంటలలోపు మాత్రమే బుక్ చేసుకోవలెను.
              11 గంటలు దాటిన పిదప ఆ మరుసటి రోజు అభిషేకము జరపబడును.
              భక్తులు గమనించగలరు.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TempleTimings;
