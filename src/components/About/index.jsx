import React from 'react'
import SubTitle from '../SubTitle'
import UserInfo from './UserInfo'
import './index.scss'

const About = props => {
  const userInfo = {
    name: 'Leo',
    date: '1991-02-12',
    address: '湖北武汉',
    phone: '+86 15807230740',
    email: 'xcxerxes@aliyun.com',
    eduction: '大专'
  }
  return (
    <section className="resume-container">
      <SubTitle title="关于个人" />
      <div className="resume-about__body">
        <UserInfo {...userInfo} />
        <div className="resume-about__right">
          <ul className="resume-about__do">
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <li key={index} className="resume-about__do-item">
                  <i className="fa fa-check"></i>
                  <span></span>
                </li>
              )
            })
          }
          </ul>
          <div className="resume-about__download">
            <a href="#">
              <i className="fa fa-download"></i>
              <span>下载简历</span>
            </a>
            <a href="#">
              <i className="fa fa-download"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
