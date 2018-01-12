import React from 'react'
import { Table, Button } from 'antd'
import logoImg from '../../../../assets/images/logo.webp'
import style from './index.css'
const { Column } = Table;



const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        firstName: i,
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake ParkNew York No.',
    });
}

export default class ListOf extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        };
    }

    start() {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange(selectedRowKeys) {
         console.log('selectedRowKeys changed: ', selectedRowKeys);
         this.setState({ selectedRowKeys});
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange.bind(this),
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className= { style.container }>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="dashed"
                        onClick={this.start.bind(this)}
                        disabled={!hasSelected}
                        loading={loading}
                        size="small"
                    >
                        移出黑名单
                    </Button>
                    <Button
                        type="danger"
                        onClick={this.start.bind(this)}
                        disabled={!hasSelected}
                        loading={loading}
                        size="small"
                    >
                        加入黑名单
                    </Button>
                    <span style={{ marginLeft: 15 }}>
                        已选 <span style={{ color: "red" }}>{selectedRowKeys.length}</span> 条
                    </span>
                </div>
                <Table rowSelection={rowSelection} dataSource={data}>
                    <Column
                        title="Title"
                        key="title"
                        render={(text, record) => (
                            <div>
                                <img src={ logoImg } alt=""/>
                            </div>
                        )}
                    />
                    <Column
                        title="Age"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Address"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="Action"
                        key="action"
                        className={ style.actionWid }
                        render={(text, record) => (
                            <div>
                                <Button
                                    type="danger"
                                    size="small"
                                >
                                    加入黑名单
                                </Button>
                            </div>
                        )}
                    />
                </Table>
            </div>
        )
    }
}
