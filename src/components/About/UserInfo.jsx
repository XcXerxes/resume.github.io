import React from 'react'

const UserInfo = props => {
  return (
    <div className="resume-user">
      <div className="resume-user__avatar">
        <img src={require("../../assets/images/myphoto.jpg")} />
      </div>
      <div className="resume-user__body">
        <div className="resume-user__name user__body-item">
          <h4>姓&nbsp;&nbsp;名：</h4>
          <p>{props.name}</p>
        </div>
        <div className="resume-user__date user__body-item">
          <h4>出生日期：</h4>
          <p>{props.date}</p>
        </div>
        <div className="resume-user__address user__body-item">
          <h4>所 在 地：</h4>
          <p>{props.address}</p>
        </div>
        <div className="resume-user__phone user__body-item">
          <h4>电   话：</h4>
          <p>{props.phone}</p>
        </div>
        <div className="resume-user__email user__body-item">
          <h4>电子邮件：</h4>
          <p>{props.email}</p>
        </div>
        <div className="resume-user__education user__body-item">
          <h4>学   历：</h4>
          <p>{props.eduction}</p>
        </div>
      </div>
    </div>
  )
}
export default UserInfo