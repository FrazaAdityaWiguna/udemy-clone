import React, { useState } from 'react';
import Course1 from '../ui/course-1.png';
import Course2 from '../ui/course-2.jpg';
import Cake from '../ui/cake.png';

function RightBar() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: 'Learning How to create beautiful scenes in illustrator in course',
      tutor: {
        ID: 1,
        name: 'Dihas',
        username: '@Dihas',
        dp: `https://placeimg.com/100/100/tutor-${1}`,
      },
      duration: '82 min',
      poster: Course1,
    },
    {
      ID: 2,
      title:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.',
      tutor: {
        ID: 2,
        name: 'Aditya',
        username: '@Aditya',
        dp: `https://placeimg.com/100/100/tutor-${2}`,
      },
      duration: '2 hr 18 min',
      poster: Course2,
    },
    {
      ID: 3,
      title: 'Begginner Web Development',
      tutor: {
        ID: 3,
        name: 'Aditya',
        username: '@Aditya',
        dp: `https://placeimg.com/100/100/tutor-${3}`,
      },
      duration: '2 hr 18 min',
      poster: Course2,
    },
  ]);

  const courseList = [];
  for (let i = 0; i < popularCourse.length; i += 1) {
    courseList.push(
      <a
        href="/course"
        className="course rel"
        type="button"
        key={`popular-course-${i}`}
      >
        <div
          className="block rel"
          style={{
            background: `#e2e2e2 url(${popularCourse[i].poster}) no-repeat center`,
          }}
        >
          <div className="user abs flex aic">
            <div className="pic">
              <img src={popularCourse[i].tutor.dp} alt="tutor" className="bl" />
            </div>

            <div className="meta rel">
              <h2 className="s15 name fontb cfff">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s15 uname fontb cfff">
                {popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="rightbar rel">
      <div className="section rel">
        <h2 className="title s24 fontb">
          Advance <span className="fontn">Search</span>
        </h2>
        <div className="search-box rel flex">
          <input
            type="text"
            placeholder="Find Your Courses..."
            className="qry s12 fontb"
          />
          <button type="button" className="go s15 fontb cfff">
            Find
          </button>
        </div>
      </div>

      <div className="section section-b rel">
        <div className="courses rel flex">
          <div className="course-a">{courseList[0]}</div>
          <div className="flex cols">
            {courseList[1]}
            {courseList[2]}
          </div>
        </div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Special <span className="fontn">Offers</span>
        </h2>
        <div className="special-offer rel flex">
          <div className="meta rel">
            <h2 className="h1 s20 fontb">50 Days Premium</h2>
            <h2 className="h2 s14 fontb">Get it before 27.6.2021</h2>
            <button type="button" className="s15 fontb">
              Learn More
            </button>
          </div>
          <div className="vector rel">
            <img src={Cake} alt="cake" />
          </div>
          <div className="ring abs" />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
