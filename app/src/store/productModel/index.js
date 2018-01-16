/**
 * @description 
 */
import {
  observable,
  action,
  computed
} from 'mobx'

class ProductModel {
  // 弹框可见状态
  @observable visible = false
  // 弹框内图片列表
  @observable imgLists = []

  @computed get colors() {
    const data = []
    this.imgLists.map(item => {
      if (item.urls.length !== 0) {
        let a = {},
            b = []




        for (let i=0; i<item.urls.length; i++) {
          let c = {}
          c.uid = item.urls[i].uid
          c.status = item.urls[i].status
          c.name = item.urls[i].response.name || ''
          c.url = item.urls[i].response.url || ''
          b.push(c)
        }

        a.name = item.name
        a.urls = b
        data.push(a)
      }
    })
    return data
  }

  constructor() {
    this.form = null
    this.colorNumber = 0
  }

  // 
  @action
  setimgListsUrls = (k, urls) => {
    this.imgLists[k].urls = urls
  }

  @action
  addimgListsItem = () => {
    this.colorNumber ++
    this.imgLists.push({
      name: `色号${this.colorNumber}`,
      urls: []
    })
  }

  // 显示编辑模板弹框
  @action
  showModel = () => {
    this.visible = true
  }

  // 关闭编辑模板弹框
  @action
  closeModel = () => {

    this.imgLists = []
    this.colorNumber = 1
    this.visible = false
  }

  // 提交编辑模板表单
  @action
  submitModel = () => {
    this.form.validateFields((err, values) => {
      if (!err) {
        //this.props.handleSubmit(values)
        values.colors = this.colors
        console.log(values)
        this.closeModel()
      }
    })
    
  }

  // 获取模板form
  @action
  getModelForm = form => {
    this.form = form
  }
}

const productModel = new ProductModel();

export default productModel