import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserInfo } from "actions/userInfo";

require('./UserInfo.css');


class UserInfo extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo;
    console.log('--------get userinfo--------');
    console.log(userInfo);
    console.log('--------get userinfo--------');
    return (
      <div className="userInfoCss">
        <div className="img01"></div>
        {
          errorMsg
        }
        {
          isLoading ? '请示信息中' :
            (
              <div>
                <p>用户信息</p>
                <p>用户名称:{userInfo && userInfo.name}</p>
                <p>介绍:{userInfo && userInfo.intro}</p>
              </div>
            )
        }
        <div>
          <button onClick={() => {
            this.props.getUserInfo()
          }}>请求用户信息</button>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ userInfo: state.userInfo }), { getUserInfo })(UserInfo);

