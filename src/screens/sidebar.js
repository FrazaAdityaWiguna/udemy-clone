import React, { useState } from 'react';
import { ImHome, ImList, ImPriceTag, ImBriefcase } from 'react-icons/im';
import { GoLightBulb } from 'react-icons/go';
import { GiTemporaryShield } from 'react-icons/gi';
import { TiBatteryHigh } from 'react-icons/ti';
import logo from '../ui/udemy.svg';

function sidebar() {
  const [navs, setNav] = useState([
    { label: 'Home', slug: '/', icon: <ImHome /> },
    { label: 'Discover', slug: 'discover', icon: <ImList /> },
    { label: 'Categories', slug: 'cats', icon: <ImPriceTag /> },
    { label: 'Courses', slug: 'my-courses', icon: <ImBriefcase /> },
  ]);

  const [currentPage, setCurrentPage] = useState('/');

  const navigation = navs.map((nav) => (
    <li key={nav.slug}>
      {console.log(nav.slug)}
      <a
        href={nav.slug}
        className={`alc link noul flex c333 ${
          currentPage === nav.slug ? 'on' : ' '
        }`}
      >
        <span className="icon s15"> {nav.icon} </span>
        <h2 className="lbl s15">{nav.label}</h2>
      </a>
    </li>
  ));

  return (
    <div className="sidebar fixed">
      <a href="#up" className="logo bl">
        <img src={logo} alt="logo" className="bl" />
      </a>

      <ul className="nav">{navigation}</ul>

      <div className="update-course flex aic">
        <GoLightBulb className="icon cfff s24" />
        <div className="lbl s15 fontb c333">
          Update Courses
          <h2 className="author s13 c777">by Fraza</h2>
        </div>
      </div>

      <div className="stats aic flex">
        <div className="stats-box flex">
          <GiTemporaryShield className="icon icon-shield s24" />
          <h2 className="val s15 fontb">1000</h2>
          <h2 className="lbl s13 c777">Points</h2>
        </div>

        <div className="stats-box flex">
          <TiBatteryHigh className="icon icon-battery s24" />
          <h2 className="val s15 fontb">75.2%</h2>
          <h2 className="lbl s13 c777">Complete</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cfff s24">
          <img
            src="https://placeimg.com/100/100/people"
            alt="people"
            className="bl"
          />
        </div>
        <div className="lbl s15 fontb c333">
          Fraza
          <h2 className="uname s13 c777">@fraza_09</h2>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
