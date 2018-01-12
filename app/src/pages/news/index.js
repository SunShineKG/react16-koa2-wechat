import React from 'react'
import style from './index.css'
import { List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export default class News extends React.Component {
    render () {
        return (
            <div className={ style.container }>
                <List
                    dataSource={data}
                    renderItem={item => (
                            <List.Item actions={[<a>查看</a>, <a>忽略</a>]}>
                                {item}
                            </List.Item>
                    )}
                />
            </div>
        )
    }
}


