import React, { useState } from 'react';
import Course1 from '../ui/course-1.png';
import Course2 from '../ui/course-2.jpg';

function Home() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: 'Learning How to create beautiful scenes in illustrator in course',
      tutor: {
        ID: 1,
        name: 'Dihas',
        username: '@dihasrahmatullah_',
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
  ]);

  const [topTutor, setTopTutor] = useState([
    {
      ID: 1,
      name: 'Erik',
      username: '@risky_s21',
      dp: `https://placeimg.com/100/100/tutors-${1}`,
    },
    {
      ID: 2,
      name: 'Ali Adam',
      username: '@ali Adam',
      dp: `https://placeimg.com/100/100/tutors-${2}`,
    },
    {
      ID: 3,
      name: 'Akbar',
      username: '@akbar',
      dp: `https://placeimg.com/100/100/tutors-${3}`,
    },
    {
      ID: 4,
      name: 'Pahrul',
      username: '@pahrul',
      dp: `https://placeimg.com/100/100/tutors-${1}`,
    },
    {
      ID: 5,
      name: 'Yohanes',
      username: '@yohanes',
      dp: `https://placeimg.com/100/100/tutors-${2}`,
    },
    {
      ID: 6,
      name: 'Alif',
      username: '@alif',
      dp: `https://placeimg.com/100/100/tutors-${3}`,
    },
  ]);

  const tutorList = [];
  for (let i = 0; i < 8; i += 1) {
    tutorList.push(
      <button className="tutor rel" type="button" key={`tutor-live-${i}`}>
        <img src={`https://placeimg.com/100/100/people?${i}`} alt="streaming" />
      </button>
    );
  }

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

  const topTutorList = [];
  for (let i = 0; i < topTutor.length; i += 1) {
    topTutorList.push(
      <a
        href="/course"
        className="user-block rel noul"
        type="button"
        key={`top-tutors-${i}`}
      >
        <div className="user flex aic">
          <div className="pic">
            <img src={topTutor[i].dp} alt="tutor" className="bl" />
          </div>

          <div className="meta rel">
            <h2 className="s15 name fontb c333">{topTutor[i].name}</h2>
            <h2 className="s15 uname fontb c333">{topTutor[i].username}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="homepage rel">
      <div className="section rel">
        <h2 className="title s24 fontb">
          Steraming <span className="fontn">Now</span>
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">This Week</span>
        </h2>
        <div className="courses rel flex">{courseList}</div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">Tutors</span>
        </h2>
        <div className="top-tutors rel flex">{topTutorList}</div>
      </div>
    </div>
  );
}

export default Home;
