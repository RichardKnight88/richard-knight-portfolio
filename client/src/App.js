/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import devicon from 'devicon'
import rk from './assets/rk.svg'
import { Container, Row, Col } from 'react-bootstrap'
import headshot from './assets/headshot.jpg'
import { sectionHeadings, technologies, otherTechnologies, projects, experience } from './helpers/infoArrays'

const App = () => {

  const displayName = (event) => {
    const assignValue = event.target.outerHTML.toString().replace('<div value="', '').split('"')[0]
    event.target.innerHTML = `${assignValue}`
  }

  const hideName = (event) => {
    event.target.innerHTML = ''
  }

  const invert = (index) => {
    if (index % 2 === 0) return 'inverted'
    if (index % 2 !== 0) return ''
  }


  return (
    <>
      <Container
        fluid
        className="header"
      >
        <div className="logo-name">
          <img
            className="logo"
            src={rk}
          />
          <div className="name">
            <h1>RICHARD</h1>
            <h1> <span className="bold">KNIGHT</span></h1>
          </div>
        </div>

        <div className="nav-links-container">
          {sectionHeadings.map(item => {
            const navLink = `#${item.toLocaleLowerCase()}`
            return (
              <>
                <a
                  key={item}
                  href={navLink}>
                  {item.toLocaleUpperCase()}
                </a>
                <p>||</p>
              </>
            )
          })}
        </div>

      </Container>


      <section
        id="about"
        className="about"
      >

        <Container className='project'>
          <Row>
            <Col
              xs={12} sm={6}
              className="bio"
            >
              <h3>[ about ]</h3>
              <h4>
                I'm a product design engineer turned software developer. I have an inquisitive nature and a passion for aesthetics, however, the most transformative product design ideas are no longer physical. After four years in industry, I pivoted into Software Engineering. I am always trying to learn new things and find great satisfaction in creating and problem solving.
                <br></br>
                <br></br>
                I am always interested in trying new hobbies but mainstays are football (soccer), hot yoga, music and reading. My love of music spans multiple genres and I have the 'Liked Songs' playlist on Spotify to prove it. I am always keen to hear new recommendations! As a former professional drummer I have played all over the UK in various bands - there's nothing quite like live music.
              </h4>
            </Col>
            <Col
              xs={12} sm={6}
              className="headshot"
            >
              <img
                src={headshot}
                alt="Richard Knight Headshot"
                className="headshot-image"
              />
            </Col>
          </Row>
        </Container>

      </section>


      <section
        id="technologies"
        className="skills"
      >

        <div className="tech-skills">
          <h3>[ technologies ]</h3>
          <div className="skills-container">
            {technologies.map(item => {
              item = item.replace('.', '')
              let iconClass = `devicon-${item.toLocaleLowerCase()}-plain`
              if (item === 'Express' || item === 'Github') {
                iconClass = `devicon-${item.toLocaleLowerCase()}-original`
              }
              if (item === 'npm') {
                iconClass = `devicon-${item.toLocaleLowerCase()}-original-wordmark`
              }
              return (
                <>
                  <div
                    className="skills-icons"
                    key={item}
                  >
                    <i
                      className={iconClass}
                      alt={item}
                    >
                    </i>
                    <div
                      value={item}
                      className="toggleName"
                      onMouseEnter={displayName}
                      onMouseLeave={hideName}
                    >
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <div className="other-skills">
          <h3>[ other ]</h3>
          <div className="skills-container">
            {otherTechnologies.map(item => {
              return (
                <>
                  <div
                    className="skills-icons"
                    key={item}
                  >
                    <i
                      key={item}
                      className={`devicon-${item.toLocaleLowerCase()}-plain`}
                      alt={item}
                      value={item}
                    >
                    </i>
                    <div
                      value={item}
                      className="toggleName"
                      onMouseEnter={displayName}
                      onMouseLeave={hideName}
                    >
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="projects" 
        className="projects"
      >

        <h3>[ projects ]</h3>
        {projects.map((item, index) => {
          return (
            <div
              key={item.key}
              className={`project ${invert(index)}`}
            >
              <Col xs={12} md={9}>
                <div className="heading-description-container">
                  <h2>{item.name.toLocaleUpperCase()}</h2>
                  <h4 className="description">{item.description}</h4>
                  <div className="project-links">
                    <a
                      href={item.repo}
                      target="_blank"
                      rel='noreferrer'
                    >
                      <div className="project-icon">
                        <i
                          className="devicon-github-original"
                          alt={`${item.name} github repository`}
                        >
                        </i>
                        <h5>REPO</h5>
                      </div>
                    </a>
                    <a
                      href={item.deployed}
                      target="_blank"
                      rel='noreferrer'
                    >
                      <div className="project-icon">
                        <i className="devicon-chrome-plain"></i>
                        <h5>APP</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </Col>

              <Col
                xs={12} md={3}
                className="project-image-container"
              >
                <div className="project-image-div">
                  <a
                    href={item.deployed}
                    target="_blank"
                    rel='noreferrer'
                  >
                    <img
                      src={item.image} 
                      className="project-image" 
                    />
                  </a>
                </div>
              </Col>
            </div>
          )
        })}
      </section>

      <section
        id="experience"
        className="experience">

        <h3>[ experience ]</h3>
        <Container>
          {experience.map((item, index) => {
            return (
              <Row
                key={item.key}
                className={`project ${invert(index)}`}
              >
                <Col 
                  xs={12} sm={9}
                  className="heading-description-container exp"
                >
                  <h2>{item.company.toLocaleUpperCase()} | {item.title}</h2>
                  <h4>{item.date}</h4>
                  {item.description.map((bullet, index) => {
                    return (
                      <li
                        key={index}
                        className="description"
                      >
                        {bullet}
                      </li>
                    )
                  })
                  }
                </Col>

                <Col
                  xs={12} sm={3}
                  className="project-image-div"
                >
                  <img
                    src={item.image}
                    className="project-image exp"
                  />
                </Col>
              </Row>
            )
          })}
        </Container>

      </section>

    </>
  )
}

export default App
