import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo from './Photo';
import './index.scss';
import resumeData from './data';

function Resume() {
  const {
    contacts,
    skills,
    works,
    selfs,
    awards,
    download,
    special,
  } = resumeData;
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="header text-center">
            <div className="header-phone">
              <Photo />
            </div>
            <div className="header-text">
              <h1>陈滔 / (Rnet-Ao)</h1>
              <span>软件开发工程师</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4}>
          <section className="box">
            {/* 联系方式 */}
            <h2>
              <i className="anticon icon-contacts" />
              &nbsp;contact
            </h2>
            {contacts.map((item) => (
              <Row key={item.icon} className="contact-item">
                <Col xs={2} className="contact-item-icon">
                  <i className={`anticon icon-${item.icon}`} />
                </Col>
                <Col className="contact-item-content">
                  {item.isMail && <a href={`mailto:${item.text}`}>{item.text}</a>}
                  {item.isUrl && (
                    <a href={item.url} target="_blank" rel="noreferrer noopener">
                      {item.text}
                    </a>
                  )}
                  {item.isPhone && <a href={`tel:${item.text.replace(/ /g, '')}`}>{item.text}</a>}
                </Col>
              </Row>
            ))}
          </section>
          <section className="box">
            {/* 技能 */}
            <h2>
              <i className="anticon icon-carryout" />
              &nbsp;skills
            </h2>
            <ul className="skills">
              {skills.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  {item.lists.map((skill) => (
                    <span className="category" key={skill}>
                      {skill}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </section>
          <section className="box">
            {/* 下载 */}
            <h2>
              <i className="anticon icon-download" />
              &nbsp;download
            </h2>
            <p><a href={download.url}>{ download.title }</a></p>
          </section>
          <section className="box">
            {/* 特别申明 */}
            <h2>
              <i className="anticon icon-exception1" />
              &nbsp;special
            </h2>
            { special.map((text) => <p key={text} className="text-danger">{ text }</p>) }
          </section>
        </Col>
        <Col xs={12} sm={12} md={8}>
          <section className="box">
            {/* 工作经历 */}
            <h2>
              <i className="anticon icon-layout" />
              &nbsp;work experience
            </h2>
            <ul className="works">
              {works.map((work) => (
                <li key={work.name}>
                  <header>
                    <h3>{work.name}</h3>
                    {work.url !== '' && (
                      <>
                        <i className="anticon icon-earth" />
                        &nbsp;&nbsp;
                        <a href={work.url}>{work.url}</a>
                      </>
                    )}
                    <p className="work-time">{`${work.start} - ${work.end}`}</p>
                  </header>
                  <div className="works-details">
                    <h4>{work.title}</h4>
                    <p>
                      {work.skills.map((skill) => (
                        <span className="category" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </p>
                    {work.experience.map((exper) => (
                      <>
                        {exper.name !== '' && <h4>{exper.name}</h4>}
                        {exper.url !== '' && (
                          <>
                            <i className="anticon icon-earth" />
                            &nbsp;&nbsp;
                            <a href={exper.url}>{exper.url}</a>
                          </>
                        )}
                        <ul className="highlight">
                          {exper.highlights.map((hl, idx) => (
                            <li key={hl}>
                              {`${hl.replace(/, /g, '，')}${idx === exper.highlights.length - 1 ? '。' : '；'}`}
                            </li>
                          ))}
                        </ul>
                      </>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="box">
            {/* 自有项目 */}
            <h2>
              <i className="anticon icon-disconnect" />
              &nbsp;self project
            </h2>
            <ul className="selfs">
              {selfs.map((project) => (
                <li key={project.name}>
                  <header>
                    <h3>{project.name}</h3>
                    {project.url !== '' && (
                      <>
                        <i className="anticon icon-earth" />
                        &nbsp;&nbsp;
                        <a href={project.url}>{project.url}</a>
                      </>
                    )}
                    <p>
                      {project.skills.map((skill) => (
                        <span className="category" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </p>
                  </header>
                </li>
              ))}
            </ul>
          </section>
          <section className="box">
            {/* 奖项及证书 */}
            <h2>
              <i className="anticon icon-Trophy" />
              &nbsp;award and certificate
            </h2>
            <ul className="award">
              {awards.map((award) => (
                <li key={award.name}>
                  <h4>{award.type}</h4>
                  <p className="award-name">{award.name}</p>
                  <p className="award-time">{award.time}</p>
                </li>
              ))}
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
