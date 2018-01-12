import React from 'react'

import style from './index.css'
import Title from './subpage/title'
import FlowCard from './subpage/flowCard'
import Shortcut from './subpage/shortcut'
import ListBar from './subpage/listBar'

export default class Pandect extends React.Component {
    render () {
        return (
            <div className={ style.container }>
                <Title name="数据统计"/>
                <div>
                    <FlowCard/>
                </div>
                <div className={ style.part2 }>
                    <div className={ style.shortcut }>
                        <Title name="快捷功能"/>
                        <Shortcut/>
                    </div>
                    <div className={ style.salesRank }>
                        <Title name="销售类别排行"/>
                        <ListBar/>
                    </div>
                </div>
                <div className={ style.newMember }>
                    <Title name="新增会员"/>
                    <ListBar/>
                </div>
            </div>
        )
    }
}
