import React from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    message
} from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values)
            }
        });       
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('pass', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input
                            prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                            type="password"
                            placeholder="密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        立即登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm


