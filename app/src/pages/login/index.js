import React from 'react'
import {
    Link
} from 'react-router-dom'
import { 
    DatePicker,
    message
} from 'antd';
import WrappedNormalLoginForm from '../../component/loginForm/index';
import style from './index.css'
import $http from 'axios'
import {observer,inject} from 'mobx-react';

@inject(
    'base'
  )
@observer
export default class Login extends React.Component {

    login(values) {
        $http
            .post('/super/signIn', values)
            .then(response => {
                if (response.data.ok === 1) {
                    message.success(response.data.message)
                    this.props.base.setToken(response.data.token)
                    this.props.history.push('/')                 
                }
            })
            .catch(err => {
                message.error(err)
            })
    }

    render () {
        return (
            <div className={ style.container }>
                <div className={ style.content }>
                    <h1>康 乐 宝 贝</h1>
                    <WrappedNormalLoginForm login={ this.login.bind(this) } />
                </div>
            </div>
        )
    }
}
