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

@inject('productModel')
@observer
export default class Model extends React.Component {

    render () {
        const {
            visible,
            showModel,
            closeModel,
            submitModel
        } = this.props.productModel
        return (
            <div className={ style.container }>
                <div className={ style.searchBox }>
                    <Search
                        placeholder="请输入模板名称"
                        onSearch={value => console.log(value)}
                        enterButton
                        className= { style.searchBar }
                    />
                    <Button type="primary"
                        onClick={ showModel }>
                        新增模板
                    </Button>
                </div>
                <EditModal
                    visible = { visible }
                    handleCancel = { closeModel }
                    handleOk = { submitModel }
                    showModal = { showModel }
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
