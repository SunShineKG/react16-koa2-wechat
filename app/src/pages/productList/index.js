import React from 'react'
import {
    observer,
    inject
} from 'mobx-react'
import style from './index.css'
import ListOf from './subpage/list'
import EditModal from '../../component/editModal'
import EditForm from './subpage/editForm'
import { Input,Button  } from 'antd';
const Search = Input.Search;

@inject('product', 'base')
@observer
export default class ProductList extends React.Component {
    componentWillUnmount(){
        console.log(11)
    }

    addProduct() {
        this.props.product.showModal
        this.props.product.changeXhrOption('post', 'product/createProduct')
    }

    render () {
        const {
            submitModel,
            clearForm
        } = this.props.product
        const {
            visible
        } = this.props.base
        return (
            <div className={ style.container }>
                <div className={ style.searchBox }>
                    <Search
                        placeholder="请输入商品名称"
                        onSearch={value => console.log(value)}
                        enterButton
                        className= { style.searchBar }
                    />
                    <Button type="primary"
                        onClick={ this.addProduct.bind(this) }>
                        新增商品
                    </Button>
                </div>
                <EditModal
                    visible = { visible }
                    handleCancel = { clearForm }
                    handleOk = { submitModel }
                    title = "编辑商品"
                    modalWidth = { 700 }>
                    <EditForm
                        handleSubmit = { submitModel }/>
                </EditModal>
                <ListOf />
            </div>
        )
    }
}
