import React from 'react'
import SubTitle from '../SubTitle'
import './index.scss'

export default class Countdown extends React.PureComponent{
  constructor (args) {
    super(args)
    this.state = {
      list: [
        {
          title: '工作经验',
          count: 4,
          icon: 'fa-envelope'
        },
        {
          title: '项目总数',
          count: 35,
          icon: 'fa-folder'
        },
        {
          title: '阅读书籍',
          count: 20,
          icon: 'fa-book'
        }
      ]
    }
  }
  render () {
    const {list} = this.state
    return (
      <section className="resume-countdown">
        <div className="resume-container">
          <ul>
            {list.map((item, index) => {
              return (
                <li className="resume-countdown__item" key={index}>
                   <i className={`fa ${item.icon}`}></i>
                   <h4>{item.count}</h4>
                   <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}