import React from 'react'
import {
    Link
} from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import logoImg from '../../assets/images/logo.webp'
import style from './index.css'

const SubMenu = Menu.SubMenu;

export default class SliderBar extends React.Component {
    constructor() {
        super()
        this.state = {
            openKeys: []
        }
        this.rootSubmenuKeys = ['sub1', 'sub2'];
    }
    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render() {
        return (
            <div style={{ width: 140 }}>
                {/*<Button type="primary" onClick={this.toggleCollapsed.bind(this)} style={{ marginBottom: 16 }}>*/}
                    {/*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}
                {/*</Button>*/}
                <div className={ style.imgBox }>
                    <img src={ logoImg } alt=""/>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"

                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange.bind(this)}

                >
                    <Menu.Item key="1">
                        <Link to="/home/pandect">
                            <Icon type="desktop" />
                            <span>概况</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="shop" /><span>商品</span></span>}>
                        <Menu.Item key="2">
                            <Link to="/home/productList/2">
                                出售中
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/home/productList/3">
                                已下架
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link to="/home/model">
                            <Icon type="tag-o" />
                            <span>模板</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="profile" /><span>订单</span></span>}>
                        <Menu.Item key="5">
                            <Link to="/home/order/5">
                                全部订单
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/home/order/6">
                                待付款
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/home/order/7">
                                待发货
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/home/order/8">
                                待签收
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/home/order/9">
                                订单完成
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10">
                        <Link to="/home/member">
                            <Icon type="team" />
                            <span>会员管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to="/home/dataCenter">
                            <Icon type="pie-chart" />
                            <span>数据中心</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="12">
                        <Link to="/home/activityCenter">
                            <Icon type="gift" />
                            <span>活动中心</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="14">
                        <Link to="/home/news">
                            <Icon type="gift" />
                            <span>消息中心</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="13">
                        <Link to="/home/setting">
                            <Icon type="setting" />
                            <span>账户设置</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

