/**
 * @description 
 */
import {
  observable,
  action
} from 'mobx'

class User {
  @observable username = '';
  @observable token = '';

  // 设置token
  @action
  setToken = token => {
    window.localStorage.token = token
  }

  // 设置用户名
  @action
  setUsername = username => {
    this.username = username
    console.log(this)
  }
}

const user = new User();

export default user