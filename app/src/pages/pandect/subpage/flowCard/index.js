import React from 'react'

import style from './index.css'

export default class FlowCard extends React.Component {
    render () {
        return (
            <div className={style.container}>
                <div className={style.item}
                     style={{ backgroundColor: '#8FCF8F' }}>
                    <p>0</p>
                    <p>昨日访客数</p>
                </div>
                <div className={style.item}
                     style={{ backgroundColor: '#84BDD0' }}>
                    <p>0</p>
                    <p>昨日新增会员数</p>
                </div>
                <div className={style.item}
                     style={{ backgroundColor: '#849BD0' }}>
                    <p>0</p>
                    <p>昨日下单数</p>
                </div>
                <div className={style.item}
                     style={{ backgroundColor: '#d084c5' }}>
                    <p>0</p><br/>
                    <p>昨日销售额</p>
                </div>
            </div>
        )
    }
}
