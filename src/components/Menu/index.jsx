import React, {Component} from 'react'
import './index.scss'

export default class ResumeMenu extends Component {
  render () {
    const {menuList} = this.props
    return (
      <section className="resume-menu">
        <ul>
          {menuList.map((item, index) => {
            return (
              <li className="resume-menu__item" key={index}>
                <a href="#">{item.title}</a>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}