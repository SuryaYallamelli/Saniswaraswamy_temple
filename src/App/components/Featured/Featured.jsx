import React from "react";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured-container">
      <div className="featured-left">
        <div className="featured-left-heading">శనిత్రయోదశి పూజ</div>
        పేర్కొన్న తేదీలు శనిత్రయోదశి మహాపర్వదినాలు. కావున ఈ శనిత్రయోదశి రోజుల్లో
        మందపల్లి గ్రామంలో కొలువై ఉన్న శ్రీ మందేశ్వర (శనేశ్వర) స్వామికి శని దోష
        పరిహారార్ధం ఆచరిస్తే శని వల్ల కలిగే సర్వదోషాలు నివారిస్తాయని
        స్కంధపురాణంలో చెప్పబడింది. కావున భక్తులు "శని" వలన కలిగే సర్వదోషాలు
        నివృత్తి కావాలని తైలాభిషేకం నిర్వహించి ఆయురారోగ్యాలతో వర్ధిల్లాలని మనవి.
        <br />
        <button className="featured-button">Register Now</button>
      </div>
      <div className="featured-right">
        <ul>
          <li className="featured-purnami">17-08-2024</li>
          <li className="featured-amavasya">31-08-2024</li>
          <li className="featured-amavasya">28-12-2024</li>
          <li className="featured-purnami">11-01-2025</li>
          <li className="featured-purnami">26-04-2025</li>
          <li className="featured-purnami">10-05-2025</li>
          <li className="featured-amavasya">24-05-2025</li>
          <li className="featured-purnami">04-10-2025</li>
        </ul>
        <br />
        <ul className="featured-legend">
          <li className="featured-purnami">పౌర్ణమి</li>
          <li className="featured-amavasya">అమావాస్య</li>
        </ul>
      </div>
    </div>
  );
}

export default Featured;
