import 'rc-progress/assets/index.css'
import React from 'react'
import {Line, Circle} from 'rc-progress'
class Linebar extends React.PureComponent{
  constructor (args) {
    super(args)
    this.state = {
      percent: 0
    }
  }
  componentDidMount () {
    this.increase()
  }
  increase = () => {
    const percent = this.state.percent + 1
    if (percent >= this.props.percent) {
      clearTimeout(this.timer)
      return false
    }
    this.setState({percent})
    this.timer = setTimeout(this.increase, 8)
  }
  getProgressbar = (props) => {
    return props.type === 'circle' ? (
      <div className="circle-bar__content">
        <Circle  strokeWidth="4" {...this.props} percent={this.state.percent} />
        <span>{`${props.percent}%`}</span>
      </div>
    ) : (
      <div className="line-bar__content">
          <Line strokeWidth="2" {...this.props} percent={this.state.percent} />
      </div>
    )
  }
  render () {
    return (
      <li className="line-bar__item">
        <div className="line-bar__label">
          <span>{this.props.label}</span>
        </div>
        {this.getProgressbar(this.props)}
      </li>
    )
  }
}
export default Linebar