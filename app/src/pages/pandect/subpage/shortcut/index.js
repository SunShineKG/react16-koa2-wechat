import React from 'react'

import style from './index.css'

export default class Shortcut extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className={style.container}>
                <ul>
                    <li>新增模板</li>
                    <li>新增商品</li>
                    <li>上架宝贝</li>
                </ul>
                <ul>
                    <li>待付款</li>
                    <li>待发货</li>
                    <li>待签收</li>
                </ul>
            </div>
        )
    }
}

