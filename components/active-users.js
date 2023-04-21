import React from 'react'

import PropTypes from 'prop-types'

const ActiveUsers = (props) => {
  return (
    <>
      <div className="active-users-active-users metrics">
        <span className="active-users-text">{props.Statistic}</span>
        <span className="active-users-text1">{props.Caption}</span>
      </div>
      <style jsx>
        {`
          .active-users-active-users {
            position: relative;
          }
          .active-users-text {
            color: rgb(255, 255, 255);
            font-size: 56px;
            font-style: normal;
            font-weight: 700;
          }
          .active-users-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            margin-top: 13px;
          }
          @media (max-width: 767px) {
            .active-users-text {
              font-size: 28px;
            }
            .active-users-text1 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .active-users-text {
              font-size: 28px;
            }
            .active-users-text1 {
              color: rgb(255, 255, 255);
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

ActiveUsers.defaultProps = {
  Caption: 'Caption',
  Statistic: 'Description',
}

ActiveUsers.propTypes = {
  Caption: PropTypes.string,
  Statistic: PropTypes.string,
}

export default ActiveUsers
