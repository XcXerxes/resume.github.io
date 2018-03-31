import React from 'react'
import './index.scss'
import SubTitle from '../SubTitle'
import Linebar from './linebar'
import {skillsLineData, skillsCircleData} from '../../data/skills.data'

const Skills = props => {
  
  return (
    <div className="resume-skills animated fadeInUp">
      <div className="resume-container">
        <SubTitle  title="技能展示" activeClass="activeClass"/>
        <div className="resume-skills__content">
          <ul>
            {skillsLineData.map((item, index) => {
              return (
                <Linebar {...item} key={index}/>
              )
            })}
          </ul>
        </div>
        <div className="resume-skills__circle">
            <h5>更多技能 <i className="fa fa-plus"></i></h5>
            <ul>
            {skillsCircleData.map((item, index) => {
              return (
                <Linebar {...item} key={index}/>
              )
            })}
            </ul>
        </div>
      </div>
    </div>
  )
}
export default Skills
