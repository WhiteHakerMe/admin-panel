import { Button, Checkbox, Form, Input } from 'antd'
import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';

const Login = () => {

  const { user, setUser } = useContext(MainContext)
  const onFinish = (values) => {
    if (values.username == "ilyosbek" && values.Password == "ilyosbek") {
      setUser(true)
      console.log(user);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <section className='w-full h-[100vh] bg-gray-200 flex items-center justify-center'>
      <Form
        className='bg-white p-5 w-1/3'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item >
          <Button className='bg-blue-500 ml-auto block text-white px-10' type="default" htmlType="submit" size='large'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  )
}

export default Login