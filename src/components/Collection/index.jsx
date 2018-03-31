import React from 'react'
import './index.scss'
import SubTitle from '../SubTitle'
import Tabs from '../Tabs'
import ScrollReveal from 'scrollreveal'

class Collection extends React.PureComponent{
  constructor (args) {
    super(args)
    this.state = {
      list: [
        {
          title: '全部'
        },
        {
          title: 'Web'
        },
        {
          title: '移动端'
        }
      ],
      activeIndex: 0
    }
  }
  componentDidMount () {
  }
  tabChange = (activeIndex) => {
    this.setState({activeIndex})
  }
  render () {
    const {list, activeIndex} = this.state
    return (
      <section className="resume-container">
        <SubTitle title="作品集" />
        <div className="resume-collection__content">
          <Tabs list={list} activeIndex={activeIndex} tabChange={index => this.tabChange(index)} />
          <ul className="collection-tabs__content">
            {[1, 2, 3, 4].map((item, index) => {
              return (<li className="tabs-content__item" key={index}>
                <div className="tabs-content__item-media">
                  
                </div>
                <div className="tabs-content__item-body">
                  <div className="tabs-body__btns">
                    <a href="#" className="tabs-body__btns-search">
                      <i className="fa fa-search-plus"></i>
                    </a>
                    <a href="#" className="tabs-body__btns-link">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <h4>{item}</h4>
                </div>
              </li>)
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Collection