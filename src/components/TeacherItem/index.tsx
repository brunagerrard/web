import React from 'react';

import './styles.css'

import Gerrard from './images/teachers/gerrard.jpg'
/* import Klopp from './images/teachers/klopp.jpg';
import Paisley from './images/teachers/paisley.jpg';*/
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
          <img src={Gerrard} alt="Steven Gerrard"/>
          <div>
              <strong>Steven Gerrard</strong>
              <span>Leadership</span>
          </div>
      </header>

      <p>
          Specialized in carrying a whole team on your shoulders.
          Very experienced in dealing with an entire city's hopes and dreams. Former students include Club World Cup winner Jordan Henderson.
      </p>

      <footer>
          <p>
              &pound;&#47;hour:
              <strong>&pound; 1.500</strong>
          </p>
          <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Contact me here!
          </button>

      </footer>
  </article>

  )
}

export default TeacherItem;

/*

  <article className="teacher-item">
      <header>
          <img src={Klopp} alt="Jurgen Klopp"/>
          <div>
              <strong>Jurgen Klopp</strong>
              <span>Engagement &amp; Mindset</span>
          </div>
      </header>

      <p>
          A master of motivation, skilled in changing associates from doubters to believers. Expert in cultivating a winning mentality and building team strength.
      </p>
  </article>

  <article className="teacher-item">
      <header>
          <img src={Paisley} alt="Bob Paisley"/>
          <div>
              <strong>Bob Paisley</strong>
              <span>All I Do Is Win</span>
          </div>
      </header>

      <p>
          3-time (with the same club!) Champions League winner.<br></br>

          That's pretty much it.
      </p>
  </article>
*/