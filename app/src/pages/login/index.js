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
import axios from 'axios'
import {observer,inject} from 'mobx-react';

@inject(
    'user'
  )
@observer
export default class Login extends React.Component {
    componentDidMount(){

    }

    login(values) {
        axios
            .post('/super/signIn', values)
            .then(response => {
                console.log(response)
                if (response.data.ok === 1) {
                    message.success(response.data.message)
                    this.props.user.setToken(response.data.token)
                    this.props.history.push('/home')                 
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
