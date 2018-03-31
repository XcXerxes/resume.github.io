import React from 'react'
import './index.scss'

const SubTitle = (props) => {
  return (
    <h2 className={`${props.activeClass || ''} section-title`}>
      {props.title}
    </h2>
  )
}
export default SubTitle
