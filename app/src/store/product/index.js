/**
 * @description 
 */
import {
  observable,
  action,
  computed
} from 'mobx'
import base from '../base'
import $http from '../../config/$http'
import productModel from '../productModel'

class Product {

  // 弹框内图片列表
  @observable imgLists = []

  @observable form = null

  @computed get colors() {
    const data = []
    this.imgLists.map(item => {

      if (item.urls.length !== 0) {
        let m = {},
            n = []
        for (let i=0; i<item.urls.length; i++) {
          let t = {},
              urls = item.urls[i]
          t.uid = urls.uid
          t.status = urls.status
          t.name = urls.response.name
                    ? urls.response.name
                    : urls.name
          t.url = urls.response.url
                    ? urls.response.url
                    : urls.url
          n.push(t)
        }
        m.name = item.name
        m.urls = n
        data.push(m)
      }
    })
    return data
  }

  constructor() {
    this.xhrOption = {
      type: '',
      url: '',
      model: ''
    }
  }

  // 
  @action
  setimgListsUrls = (k, urls) => {
    this.imgLists[k].urls = urls
  }

  @action
  addimgListsItem = () => {

    this.imgLists.push({
      name: '',
      urls: []
    })
  }

  // 滞空form
  @action
  clearForm = () => {

    this.imgLists = []
    this.form.resetFields()
    base.closeModel()
  }

  // 提交编辑模板表单
  @action
  submitModel = () => {

    this.form.validateFields(async (err, values) => {
      if (!err) {
        values.colors = this.colors
        values.token = window.localStorage.token
        let result = await $http({ ...this.xhrOption, values })
        this.clearForm()
        if(this.xhrOption.model === 'productModel') {
          productModel.getproductModel()
        }
      }
    })
    
  }

  // 获取模板form
  @action
  getModelForm = form => {
    this.form = form
  }

  // change xhrOption
  @action
  changeXhrOption = (type, url, model='product') => {
    this.xhrOption.type = type
    this.xhrOption.model = model
    this.xhrOption.url = `/${url}`
  }

  // 新增产品
  @action
  addProduct = form => {
    this.form = form
  }

  // 修改产品
  @action
  putProduct = form => {
    this.form = form
  }

  // 删除产品
  @action
  delProduct = form => {
    this.form = form
  }

  // 获取产品信息
  @action
  getProduct = () => {
    $http({
      type: 'get',
      url: '/productModel/getProductModelInfo',
      values: {
          token: window.localStorage.token
      }
  }).then(res => {
      console.log(res);
      this.setState({
          data: res.rows
      })
  })
  }
}

const product = new Product();

export default product