import React from 'react'
import { Table, Button } from 'antd'
import logoImg from '../../../../assets/images/logo.webp'
import style from './index.css'
import $http from '../../../../config/$http'
import { port } from '../../../../config/index'
import { inject, observer } from 'mobx-react'

const { Column } = Table;



@inject('productModel', 'product', 'base')
@observer
export default class ListOf extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            data: []
        };
    }


    componentDidMount() {
        this.props.productModel.getproductModel()
    }

    onSelectChange(selectedRowKeys) {
         console.log('selectedRowKeys changed: ', selectedRowKeys);
         this.setState({ selectedRowKeys});
    }

    handlePut(val) {
        this.props.productModel.putproductModel(val)
    }

    handleDelete(val) {
        console.log(val)
    }




    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange.bind(this),
        };
        const hasSelected = selectedRowKeys.length > 0;

        const { listData, getproductModel } = this.props.productModel

        return (
            <div className= { style.container }>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="danger"
                        disabled={!hasSelected}
                        loading={loading}
                        size="small"
                    >
                        删除
                    </Button>
                    <span style={{ marginLeft: 15 }}>
                        已选 <span style={{ color: "red" }}>{selectedRowKeys.length}</span> 条
                    </span>
                </div>
                <Table rowSelection={rowSelection} dataSource={listData.toJS()} rowKey={ d => d._id }>
                    <Column
                        title="效果图"
                        key="Name"
                        width = {120}
                        render={ item => (
                            <div className = {style.imgBox}>
                                <img src={ item.colors.length>0 ? port+item.colors[0].urls[0].name : '' } alt=""/>
                            </div>
                        )}
                    />
                    <Column
                        title="产品名称"
                        dataIndex="spec"
                        key="spec"   
                        width = '25%'                   
                    />
                    <Column
                        title="款式"
                        dataIndex="style"
                        key="style"
                    />
                    <Column
                        title="材质"
                        dataIndex="texture"
                        key="texture"
                    />
                    <Column
                        title="面料"
                        dataIndex="lining"
                        key="lining"
                    />
                    <Column
                        title="单价"
                        key="price"
                        render={ item => (
                            <strong>{ item.price }</strong>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        width={ 150 }
                        className={ style.actionWid }
                        render={ item => (
                            <div>
                                <Button
                                    type="dashed"
                                    size="small"
                                    onClick={ this.handlePut.bind(this, item) }
                                >
                                    修改
                                </Button>
                                <Button
                                    type="danger"
                                    size="small"
                                    onClick={ this.handleDelete.bind(this, item) }
                                >
                                    删除
                                </Button>
                            </div>
                        )}
                    />
                </Table>
            </div>
        )
    }
}
