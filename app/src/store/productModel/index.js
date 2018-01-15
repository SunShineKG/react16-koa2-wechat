/**
 * @description 
 */
import {
  observable,
  action
} from 'mobx'

class ProductModel {
   @observable visible = false

   constructor() {
     this.form = null
   }

  // 显示编辑模板弹框
  @action
  showModel = () => {
    this.visible = true
  }

  // 关闭编辑模板弹框
  @action
  closeModel = () => {
    this.visible = false
  }

  // 提交编辑模板表单
  @action
  submitModel = () => {
    this.form.validateFields((err, values) => {
      if (!err) {
        //this.props.handleSubmit(values)
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