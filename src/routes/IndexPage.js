import React from 'react'
import { connect } from 'dva'
import axios from 'axios'
import { setToken } from '../utils/helper'
import { Button, Checkbox, Form, Icon, Input } from 'antd'
import '../styles/login.less'

const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/oauth/token', {
          'grant_type': 'password',
          'client_id': '3',
          'client_secret': 'EWw72SDQtX1o797pqPDvvZoiKwiQfHzcCRyXHqUA',
          'username': values.username,
          'password': values.password,
          'scope': '*'
        }).then(({ data }) => {
          console.log(data)
          setToken(data['access_token'])
        })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请填写用户名' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }}/>} placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }]
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住登录状态</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <a href="">立即注册</a>
        </FormItem>
      </Form>
    )
  }
}

class IndexPage extends React.Component {
  render () {
    const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
    return <div className="index-page">
      <WrappedNormalLoginForm/>
    </div>
  }
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
