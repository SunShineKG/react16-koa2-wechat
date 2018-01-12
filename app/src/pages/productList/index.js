import React from 'react'
import style from './index.css'
import ListOf from './subpage/list'
import { Input,Button  } from 'antd';
const Search = Input.Search;

export default class ProductList extends React.Component {
    render () {
        return (
            <div className={ style.container }>
                <div className={ style.searchBox }>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        className= { style.searchBar }
                    />
                    <Button type="primary">新增商品</Button>
                </div>
                <ListOf/>
            </div>
        )
    }
}
