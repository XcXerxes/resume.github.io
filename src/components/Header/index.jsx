import React from 'react'
import './index.scss'

export default class ResumeHeader extends React.Component {
  constructor (args) {
    super(args)
    this.state = {
      name: '123'
    }
  }
  render () {
    const {iconList} = this.props
    return (
      <section className="resume-header">
        <div className="resume-header__content">
          <h4 className="animated fadeInUp">I am Leo</h4>
          <h1 className="animated fadeInUp"><span>全栈</span>开发工程师</h1>
          <p className="animated fadeInUp">我是一个热爱技术的前端开发工程师， 而且也略涉后端，喜欢钻研新的技术，喜欢请@我！</p>
          <div className="header-content__connect animated fadeInUp">
            {iconList.map((item, index) => {
              return (
                <a href="javascript:;" className="header-connect__item" key={index}>
                  <i className={`fa ${item.icon}`}></i>
                </a>
              )
            })}
          </div>
          <div className="header-content__mouse animated fadeInUp">
            <div className="header-mouse__icon">
              <div className="header-mouse__wheel"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
