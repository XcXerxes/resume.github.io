import React from 'react'
import './index.scss'
import {workData} from '../../data/work.data'
import SubTitle from '../SubTitle'

const Work = props => {
  return (
    <section className="resume-container">
      <SubTitle title="工作经历" />
      <div className="resume-work__container">
        <ul className="resume-work">
          {workData.map((item, index) => {
            return (
              <li className="resume-work__item" key={index}>
                <div className="resume-work__item-date">
                  <h4>{item.date}</h4>
                </div>
                <div className="resume-work__item-timeline">
                  <div className="animate-mask"></div>
                  <div className="work-timeline__content">
                    <div className="work-timeline__heading">
                      <h3>{item.position}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <div className="work-timeline__body">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Work