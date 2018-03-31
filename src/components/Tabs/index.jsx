import React from 'react'
import './index.scss'

export default class Tabs extends React.PureComponent{
  constructor (args) {
    super(args)
    this.state = {
      slideLeft: '50%'
    }
  }
  setSlider = (index) => {
    return `${this.refs.tabsItem.offsetLeft - (2 - index) * 80}`
  }
  componentDidMount () {
    const {activeIndex} = this.props
    this.setState({slideLeft: this.setSlider(activeIndex) + 'px'})
  }
  tabChange = (index) => {
    this.props.tabChange(index)
    this.setState({slideLeft: this.setSlider(index) + 'px'})
  }
  render () {
    const {list, activeIndex} = this.props
    return (
      <div className="tabs">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} ref="tabsItem" className={index === activeIndex ? 'active' : ''} onClick={() => this.tabChange(index)}><a href="javascript:;">{item.title}</a></li>
            )
          })}
        </ul>
        <div ref="silder" className="tabs-slider" style={{left: this.state.slideLeft}}></div>
      </div>
    )
  }
}