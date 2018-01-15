import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import {
  observer,
  inject
} from 'mobx-react'
const FormItem = Form.Item;
const Option = Select.Option;

@inject('product')
@observer
class NormalForm extends React.Component {
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  componentDidMount() {
    this.props.product.getModelForm(this.props.form)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem
          label="商品模板"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('gender')(
            <Select
              placeholder="请选择商品模板"
              onChange={this.handleSelectChange}
            >
              <Option value="male">模板一</Option>
              <Option value="female">模板二</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          label="产品名称"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: '商品模板名称不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="款式"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="材质"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="面料"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="参考尺寸"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: '参考尺寸不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="商品单价"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: '商品单价不可为空!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="单位"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('note', {
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
      </Form>
    );
  }
}

const EditForm = Form.create()(NormalForm);

export default EditForm