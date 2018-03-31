import React, { Component } from 'react';
import ResumeHeader from './components/Header'
import ResumeMenu from './components/Menu'
import About from './components/About'
import Video from './components/Video'
import Work from './components/Work'
import Skills from './components/Skills'
import Collection from './components/Collection'
import Countdown from './components/Countdown'
import Contact from './components/Contact'
import ScrollReveal from 'scrollreveal'

class App extends Component {
  constructor (args) {
    super(args)
    this.state = {
      iconList: [
        {
          icon: 'fa-qq'
        },
        {
          icon: 'fa-wechat'
        },
        {
          icon: 'fa-weibo'
        },
        {
          icon: 'fa-facebook'
        },
      ],
      menuList: [
        {
          title: '主页'
        },
        {
          title: '关于我'
        },
        {
          title: '工作经历'
        },
        {
          title: '技能'
        },
        {
          title: '作品'
        },
        {
          title: '博客'
        },
        {
          title: '联系'
        }
      ],
      skill: false
    }
  }
  setScroll = () => {
    setTimeout(() => {
      if (window.scrollY > 2062) {
        this.setState({skill: true})
      }
    }, 400)
  }
  componentDidMount () {
    const sr = ScrollReveal({reset: true})
    window.addEventListener('scroll', this.setScroll, false)
    sr.reveal('.resume-work__item-timeline', {duration: 2000}, 50)
    sr.reveal('.tabs-content__item', {duration: 2000,}, 50)
  }
  render() {
    console.log(window.scrollY)
    return (
      <div className="App">
        <ResumeHeader iconList={this.state.iconList}/>
        <ResumeMenu menuList={this.state.menuList} />
        <About />
        <Video />
        <Work />
        {this.state.skill && <Skills />}
        <Collection />
        <Countdown />
        <Contact />
        <footer>&copy; 2018 Designer By Leo</footer>
      </div>
    );
  }
}

export default App;
