import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {
    observer,
    inject
} from 'mobx-react';
import $http from 'axios'
import { 
    interceptors
 } from '../../config'
import { 
    message
} from 'antd';
import SliderBar from '../../component/slideBar'
import Pandect from '../pandect'
import ProductList from '../productList'
import ActivityCenter from '../activityCenter'
import News from '../news'
import DataCenter from '../dataCenter'
import Member from '../member'
import Model from '../model'
import Order from '../order'
import Setting from '../setting'
import HeaderBar from '../../component/header'
import style from './index.css'

@inject('user')
@observer
export default class Home extends React.Component {
    constructor(props){
        super(props)
        
        this.setUsername = this.props.user.setUsername
        interceptors(this)
    }
    componentDidMount(){   
        $http
        .get('/super/getUserInfo',{
            params:{
                token: window.localStorage.token
            }
        })
        .then(res => {
            this.setUsername(res.data.rows.username)
        })
        $http
        .put('/super/reviseSuper',{
            token: window.localStorage.token,
            pass: '$2a$10$r.SGG/YKc/zRrDg07f7R8.2AwyhW.WAY2UmqwcSNU.7NZjBhk2faO'
        })
        .then(res => {
            this.setUsername(res.data.rows.username)
        })
    }
    render () {
        return (

            <div className={ style.container }>
                <div className={ style.slideBar }>
                    <SliderBar/>
                </div>
                <div className={ style.rightBox }>
                    <div className={ style.header }>
                        <HeaderBar/>
                    </div>
                    <Router>
                        <div className={ style.content }>
                            <Switch>
                                <Route path="/home/pandect" component={ Pandect }/>
                                <Route path="/home/productList/:code" component={ ProductList }/>
                                <Route path="/home/activityCenter" component={ ActivityCenter }/>
                                <Route path="/home/dataCenter" component={ DataCenter }/>
                                <Route path="/home/member" component={ Member }/>
                                <Route path="/home/model" component={ Model }/>
                                <Route path="/home/news" component={ News }/>
                                <Route path="/home/order/:code" component={ Order }/>
                                <Route path="/home/setting" component={ Setting }/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>

        )
    }
}