import React from 'react'
import WrappedNormalLoginForm from './subpage/index'
import style from './index.css'
import $http from 'axios'
import { 
    message
} from 'antd';

export default class Setting extends React.Component {

    handleEmit(val) {
        $http
            .put('/super/reviseSuper',{
                token: window.localStorage.token,
                ...val
            })
            .then(res => {
                
                if (res.data.ok === 1) {
                    message.success(res.data.message)
                } else {
                    message.error(res.data.message)
                }
            })
    }

    render () {
        return (
            <div className={ style.container }>
                <div className={ style.form }>
                    <WrappedNormalLoginForm
                        handleEmit = { this.handleEmit.bind(this) } />
                </div>
            </div>
        )
    }
}


