import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import UploadImg from '../uploadImg'
import {
  observer,
  inject
} from 'mobx-react'
import style from './index.css'

@inject('product')
@observer
export default class ColorsPart extends React.Component {

  pictureChange(k, fileList) {
    this.props.product.setimgListsUrls(k, fileList)
  }

  insertItem() {
    this.props.product.addimgListsItem()
  }

  handleInputChange(v, e) {
    v.name = e.target.value
  }

  render () {
    const { imgLists } = this.props.product
    return (
      <div>
        { 
          imgLists.map((v, k) => {
            return  <div key = {k} >
                      <div className = {style.inw}>
                        <Input
                          defaultValue = {v.name}
                          value = {v.name}
                          onChange = { this.handleInputChange.bind(this, v) }/>
                      </div>
                      <UploadImg
                        data = {v.urls}
                        pictureChange = { this.pictureChange.bind(this, k) }/>
                    </div>
          })
        }
        <div>
          <Button type="primary" onClick={this.insertItem.bind(this)} >
            添加颜色分类
          </Button>
        </div>
      </div>
    )
  }
}
