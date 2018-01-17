import React from 'react'
import { Badge,Icon } from 'antd';
import style from './index.css'
import Avator from '../../assets/images/logo.webp'
import {
    observer,
    inject
} from 'mobx-react'

@inject('base')
@observer
export default class HeaderBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className={ style.container }>
                <div className={ style.avator }>
                    <span>
                        欢迎您，{ this.props.base.username }
                    </span>
                </div>
                <div className={ style.news }>
                    <Icon type="notification" />
                    <Badge count={5}>
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
            </div>
        )
    }
}
