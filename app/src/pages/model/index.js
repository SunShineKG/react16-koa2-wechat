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

@inject('product', 'base', 'productModel')
@observer
export default class Model extends React.Component {

    addProductModel() {
        this.props.base.showModel()
        this.props.product.changeXhrOption('post', 'productModel/createProductModel')
    }

    onSearch(value) {
        this.props.productModel.getproductModel(value, 0)
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
                        placeholder="请输入模板名称"
                        onSearch={this.onSearch.bind(this)}
                        enterButton
                        className= { style.searchBar }
                    />
                    <Button type="primary"
                        onClick={ this.addProductModel.bind(this) }>
                        新增模板
                    </Button>
                </div>
                <EditModal
                    visible = { visible }
                    handleCancel = { clearForm }
                    handleOk = { submitModel }
                    title = "编辑模板"
                    modalWidth = { 700 }>
                    <EditForm
                        handleSubmit = { submitModel }/>
                </EditModal>
                <ListOf />
            </div>
        )
    }
}
