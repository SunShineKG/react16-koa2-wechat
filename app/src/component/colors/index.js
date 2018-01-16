import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import UploadImg from '../uploadImg'
import {
  observer,
  inject
} from 'mobx-react'
import style from './index.css'

@inject('productModel')
@observer
export default class ColorsPart extends React.Component {

  pictureChange(k, fileList) {
    this.props.productModel.setimgListsUrls(k, fileList)
  }

  insertItem() {
    this.props.productModel.addimgListsItem()
  }

  render () {
    const { imgLists } = this.props.productModel
    return (
      <div>
        { 
          imgLists.map((v, k) => {
            return  <div key = {k} >
                      <div className = {style.inw}>
                        <Input defaultValue = {v.name} />
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
