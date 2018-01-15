import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import UploadImg from '../uploadImg'
import style from './index.css'

export default class ColorsPart extends React.Component {
    render () {
        return (
          <div>
            <div>
              <div className={ style.inw }>
                <Input />
              </div>
              <UploadImg />
            </div>
            <div>
              <Button type="primary">
                添加颜色分类
              </Button>
            </div>
          </div>
        )
    }
}
