/**
 * @description 全局state
 */
import {
  observable,
  action
} from 'mobx'

class Base {
  @observable username = ''
  @observable token = ''
  // 弹框可见状态
  @observable visible = false

  // 设置token
  @action
  setToken = token => {
    window.localStorage.token = token
  }

  // 设置用户名
  @action
  setUsername = username => {
    this.username = username
  }

  // 显示模态框
  @action
  showModel = () => {
    this.visible = true
  }

  // 关闭模态框
  @action
  closeModel = () => {
    this.visible = false
  }
}

const base = new Base();

export default base