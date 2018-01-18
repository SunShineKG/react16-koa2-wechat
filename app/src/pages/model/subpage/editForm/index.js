import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import ColorsPart from '../../../../component/colors'
import {
  observer,
  inject
} from 'mobx-react'
import style from './index.css'

const FormItem = Form.Item;
const Option = Select.Option;

@inject('product')
@observer
class NormalForm extends React.Component {

  componentDidMount() {
    this.props.product.getModelForm(this.props.form)
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
        {getFieldDecorator('_id')(
          <Input type='hidden' />
        )}
        <FormItem
          label="产品名称"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('Name', {
            rules: [{ required: true, message: '产品名称不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="款式"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('style')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="材质"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('texture')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="面料"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('lining')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="型号"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('spec', {
            rules: [{ required: true, message: '型号不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="型号说明"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('specExplain')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="商品单价"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('price', {
            rules: [{ required: true, message: '商品单价不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="单位"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('Unit', {
            rules: [{ required: true, message: '单位不可为空!' }],
          })(
            <Select
              placeholder="请选择商品单位"
            >
              <Option value="件">件</Option>
              <Option value="套">套</Option>
              <Option value="匹">匹</Option>
              <Option value="个">个</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          label="颜色分类"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
        >
          <ColorsPart />
        </FormItem>
      </Form>
    );
  }
}

const EditForm = Form.create()(NormalForm);

export default EditForm