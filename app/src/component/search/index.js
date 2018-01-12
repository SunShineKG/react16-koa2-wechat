import React from 'react'
import style from './index.css'
import { Input } from 'antd';
const Search = Input.Search;

export default class Search extends React.Component {
    render () {
        return (
            <div className={ style.container }>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </div>
        )
    }
}




